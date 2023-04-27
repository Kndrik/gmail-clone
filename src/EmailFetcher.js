import { db } from "./firebaseInit";
import { getDocs, query, collection } from "firebase/firestore";
import { auth } from './AuthManager';

export async function getInboxEmails() {
    let emails = [];
    const ref = collection(db, "users", auth.currentUser.uid, "inbox_emails");
    const q = query(ref);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        emails.push(doc.data());
    })
    return emails;
}