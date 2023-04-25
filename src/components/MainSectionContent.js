import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";

import { useState } from "react";

const MainSectionContent = (props) => {

    return (
        <div onScroll={props.handleScroll} className="mainSectionContent">
            <MainSectionContentSortBar />
            <EmailList onSelectItem={props.onSelectItem} />
            <div className="footer">
                <div className="left">
                    <div>9,13 Go utilisés sur 15 Go</div>
                </div>
                <div className="middle">
                    <div>
                        Conditions d'utilisation - Confidentialité - Règlement du programme
                    </div>
                </div>
                <div className="right">
                    <div>Dernière activité sur le compte : il y a 10 minutes.</div>
                </div>
            </div>
        </div>
    )
};

export default MainSectionContent;