import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Toolbar from "../components/Toolbar";
import EmailForm from "../components/EmailForm";

import { Navigate } from "react-router-dom";

import { useState, useContext } from "react";

import { AuthContext } from "../components/AuthContext";

const Mails = () => {
    const [reducedSideBar, setReducedSideBar] = useState(false);
    const [writingEmail, setWritingEmail] = useState(true);
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return (
        <div className="App">
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
        </div>
    );
}

export default Mails;