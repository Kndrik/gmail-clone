import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import { logIn } from "../AuthManager";
import LoginButton from "../components/LoginButton";
import { db } from "../firebaseInit";
import { setDoc, doc } from "firebase/firestore";

const Login = (props) => {
    const {currentUser} = useContext(AuthContext);

    if(!!currentUser) {
        return <Navigate to="/" />
    }

    const handleSignIn = async () => {
        logIn().then((result) => {
            const uid = result.user.uid;
            const name = result.user.displayName;
            const picture = result.user.photoURL;
            const email = result.user.email;

            setDoc(doc(db, 'users', uid), {
                id: uid,
                name: name,
                pictureUrl: picture,
                emailAddress: email
            });
        }).catch((error) => {
            console.error("There was an error logging in", error);
        });
    };

    return (
        <div className="loginPage">
            <div className="loginContainer">
                <div className="top">
                    <h1>Welcome to Gmail Clone</h1>
                    <div>Please Sign in</div>
                </div>
                <LoginButton clickEvent={handleSignIn} />
            </div>
        </div>
    )
};

export default Login;