import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";
import { logIn } from "../AuthManager";

const Login = (props) => {
    const {currentUser} = useContext(AuthContext);

    if(!!currentUser) {
        return <Navigate to="/mail" />
    }

    const handleSignIn = async () => {
        logIn().then((result) => {
            console.log("Successfully logged in.");
        }).catch((error) => {
            console.error("There was an error logging in", error);
        });
    };

    return (
        <div className="loginPage">
            <button onClick={handleSignIn}>Sign in with Google</button>
        </div>
    )
};

export default Login;