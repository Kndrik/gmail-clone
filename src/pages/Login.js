import { app } from "../firebaseInit";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
auth.languageCode = "it";

const Login = (props) => {
    const {currentUser} = useContext(AuthContext);

    if(!!currentUser) {
        return <Navigate to="/mail" />
    }

    const handleSignIn = async () => {
        signInWithPopup(auth, provider)
            .then((result) => {

            }).catch((error) => {

            });
    };



    return (
        <div className="loginPage">
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    )
};

export default Login;