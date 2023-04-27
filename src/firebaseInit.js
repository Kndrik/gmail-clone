import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAS9tVRa2z2KPHQxGDUW6qJ-BJLClztnzA",
    authDomain: "clone-94a85.firebaseapp.com",
    projectId: "clone-94a85",
    storageBucket: "clone-94a85.appspot.com",
    messagingSenderId: "513730988433",
    appId: "1:513730988433:web:9f89b5abb176eeaf123230"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { app, db };