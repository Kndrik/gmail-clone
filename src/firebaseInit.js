import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAS9tVRa2z2KPHQxGDUW6qJ-BJLClztnzA",
    authDomain: "clone-94a85.firebaseapp.com",
    projectId: "clone-94a85",
    storageBucket: "clone-94a85.appspot.com",
    messagingSenderId: "513730988433",
    appId: "1:513730988433:web:9f89b5abb176eeaf123230"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'it';
  const provider = new GoogleAuthProvider();
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

const SignIn = async () => {
  return signInWithPopup(auth, provider);
}

export { app, auth, SignIn };