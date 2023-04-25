import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainSection from "../components/MainSection";
import Toolbar from "../components/Toolbar";

import { useState } from "react";

const Mails = () => {
    const [reducedSideBar, setReducedSideBar] = useState(false);

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