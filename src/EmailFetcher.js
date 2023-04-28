import { db } from "./firebaseInit";
import { getDocs, query, collection, where, addDoc, orderBy } from "firebase/firestore";
import { auth } from './AuthManager';

export async function getInboxEmails() {
    let emails = [];
    const ref = collection(db, "users", auth.currentUser.uid, "inbox_emails");
    const q = query(ref, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        emails.push(doc.data());
    });
    return emails;
}

export async function getSentEmails() {
    let emails = [];
    const ref = collection(db, "users", auth.currentUser.uid, "sent_emails");
    const q = query(ref, orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        emails.push(doc.data());
    });
    return emails;
}

export async function sendEmail(receiver, email) {
    // Check if sender exists in database
    const q = query(collection(db, "users"), where("emailAddress", "==", receiver));
    const querySnapshot = await getDocs(q);
    if(querySnapshot.empty) {
        throw new Error("There is no user with this email address.");
    }

    // Add email to receiver's inbox collection
    let receiverID;
    let receiverName;
    querySnapshot.forEach((doc) => {
        receiverID = doc.id;
        receiverName = doc.data().name;
    })
    const receiverRef = collection(db, "users", receiverID, "inbox_emails");
    addDoc(receiverRef, email).then((result) => {
        return "Email sent";
    }).catch((error) => {
        throw new Error(error);
    });

    // Add email to the user's sent collection
    let sentEmail = email;
    sentEmail.receiver = receiverName;
    const userRef = collection(db, "users", auth.currentUser.uid, "sent_emails");
    addDoc(userRef, sentEmail).then((result) => {
        return "Email added to sent section";
    }).catch((error) => {
        throw new Error("Couldn't add the email to the sent collection", error);
    });
}