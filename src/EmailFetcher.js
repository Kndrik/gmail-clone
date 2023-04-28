import { db } from "./firebaseInit";
import { getDocs, query, collection, 
        where, addDoc, orderBy, 
        limit, doc, updateDoc } from "firebase/firestore";
import { auth } from './AuthManager';

export async function getInboxEmails() {
    let emails = [];
    const ref = collection(db, "users", auth.currentUser.uid, "inbox_emails");
    emails = await getEmailsFromRef(ref);
    return emails;
}

export async function getSentEmails() {
    let emails = [];
    const ref = collection(db, "users", auth.currentUser.uid, "sent_emails");
    emails = await getEmailsFromRef(ref);
    return emails;
}

async function getEmailsFromRef(ref) {
    let emails = [];
    const q = query(ref, orderBy("date", "desc"), limit(50));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        data.docId = doc.id;
        emails.push(data);
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

    // Get receiver's id and display name
    let receiverID;
    let receiverName;
    querySnapshot.forEach((doc) => {
        receiverID = doc.id;
        receiverName = doc.data().name;
    })
    
    // Add receiver's name to the email's data
    let sentEmail = email;
    sentEmail.receiver = receiverName;
    sentEmail.inbox = true;

    // Add email to receiver's inbox collection
    const receiverRef = collection(db, "users", receiverID, "inbox_emails");
    addDoc(receiverRef, sentEmail).then((result) => {
        return "Email sent";
    }).catch((error) => {
        throw new Error(error);
    });

    // Add email to the user's sent collection
    sentEmail.inbox = false;
    const userRef = collection(db, "users", auth.currentUser.uid, "sent_emails");
    addDoc(userRef, sentEmail).then((result) => {
        return "Email added to sent section";
    }).catch((error) => {
        throw new Error("Couldn't add the email to the sent collection", error);
    });
}

export async function updateInboxEmail(id, updatedData) {
    const ref = doc(db, "users", auth.currentUser.uid, "inbox_emails", id);
    updateDoc(ref, updatedData).then(result => {
    }).catch(error => {
        console.error("There was a problem updating the received email", error);
    });
}

export async function updateSentEmail(id, updatedData) {
    const ref = doc(db, "users", auth.currentUser.uid, "sent_emails", id);
    updateDoc(ref, updatedData).then(result => {
        return "ok";
    }).catch(error => {
        console.error("There was a problem updating the sent email", error);
    });
}