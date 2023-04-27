import { app } from './firebaseInit';
import { getAuth, signInWithPopup, signOut,
            GoogleAuthProvider } from "firebase/auth";

const auth = getAuth(app);
auth.languageCode = "it";
const provider = new GoogleAuthProvider();

export const logIn = () => {
    return signInWithPopup(auth, provider);
}

export const logOut = () => {
    return signOut(auth);
}