import { app } from "../firebaseInit";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import React, { useEffect, useState } from "react";

const provider = new GoogleAuthProvider();

export const auth = getAuth(app);

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}