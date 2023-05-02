import { db } from "./firebaseInit";
import { getDocs, query, collection, 
        where, addDoc, orderBy, 
        limit, doc, updateDoc,
        deleteDoc, 
        getDoc} from "firebase/firestore";
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
    sentEmail.read = true;
    const userRef = collection(db, "users", auth.currentUser.uid, "sent_emails");
    addDoc(userRef, sentEmail).then((result) => {
        return "Email added to sent section";
    }).catch((error) => {
        throw new Error("Couldn't add the email to the sent collection", error);
    });
}

export async function updateInboxEmail(id, updatedData) {
    const ref = doc(db, "users", auth.currentUser.uid, "inbox_emails", id);
    await updateDoc(ref, updatedData);
}

export async function updateSentEmail(id, updatedData) {
    const ref = doc(db, "users", auth.currentUser.uid, "sent_emails", id);
    await updateDoc(ref, updatedData);
}

export async function deleteInboxEmails(ids) {
    await ids.forEach(id => {
        const ref = doc(db, "users", auth.currentUser.uid, "inbox_emails", id);
        deleteDoc(ref);
    });
}

export async function deleteSentEmails(ids) {
    await ids.forEach(id => {
        const ref = doc(db, "users", auth.currentUser.uid, "sent_emails", id);
        deleteDoc(ref);
    });
}

export async function getEmailFromId(id) {
    let ref = doc(db, "users", auth.currentUser.uid, "inbox_emails", id);
    let email = await getDoc(ref);
    if (email.data()) {
        return email.data();
    }

    ref = doc(db, "users", auth.currentUser.uid, "sent_emails", id);
    email = await getDoc(ref);  
    if (email.data()) {
        return email.data();
    } 

    throw new Error("Couldn't find the email in the database.");
}