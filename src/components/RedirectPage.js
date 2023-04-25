import { AuthContext } from "./AuthContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const RedirectPage = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div>
            {
                !!currentUser ?
                <Navigate to="/login" />
                :
                <Navigate to="/mail" />
            }
        </div>
    )
};

export default RedirectPage;