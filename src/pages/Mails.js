import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Toolbar from "../components/Toolbar";

import { Navigate } from "react-router-dom";

import { useState, useContext } from "react";

import { AuthContext } from "../components/AuthContext";

const Mails = () => {
    const [reducedSideBar, setReducedSideBar] = useState(false);
    const {currentUser} = useContext(AuthContext);

    if (!currentUser) {
        return <Navigate to="/login" />
    }

    return (
        <div className="App">
            <Header changeSideBar={() => setReducedSideBar(!reducedSideBar)} />
            <div className="content">
                <Sidebar reduced={reducedSideBar} />
                <MainSection />
                <Toolbar />
            </div>
        </div>
    );
}

export default Mails;