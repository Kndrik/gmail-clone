import { AuthContext } from "../components/AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const RedirectPage = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            {
                !!currentUser ?
                <Navigate to="/mail" />
                :
                <Navigate to="/login" />
            }
        </div>
    )
};

export default RedirectPage;