import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Toolbar from "../components/Toolbar";
import EmailForm from "../components/EmailForm";
import Toast from "../components/Toast";

import { Navigate } from "react-router-dom";

import React, { useState, useContext } from "react";

import { AuthContext } from "../components/AuthContext";

export const ToastContext = React.createContext();

const Mails = () => {
    const [reducedSideBar, setReducedSideBar] = useState(false);
    const [writingEmail, setWritingEmail] = useState(false);
    const {currentUser} = useContext(AuthContext);
    const [toasting, setToasting] = useState(false);
    const [toastText, setToastText] = useState('');
    const [canCloseToast, setCanCloseToast] = useState(true);

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    const createToast = (text, canClose) => {
        console.log("creating toast with text", text);
        setToasting(true);
        setToastText(text);
        setCanCloseToast(canClose);
        setTimeout(closeToast, 8000);
    };

    const closeToast = () => {
        setToasting(false);
    }

    return (
        <div className="App">
            <ToastContext.Provider 
                value={createToast}>
                <Header changeSideBar={() => setReducedSideBar(!reducedSideBar)} />
                <div className="content">
                    <Sidebar 
                        reduced={reducedSideBar} 
                        openEmailWindow={() => setWritingEmail(true)}
                    />
                    <MainSection />
                    <Toolbar />
                </div>
                <EmailForm show={writingEmail} closeWindow={() => setWritingEmail(false)} />
                {
                    toasting ?
                    <Toast clickEvent={closeToast} text={toastText} canClose={canCloseToast} />
                    :
                    null
                }
            </ToastContext.Provider>
        </div>
    );
}

export default Mails;