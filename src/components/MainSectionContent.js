import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";

import { getInboxEmails } from "../EmailFetcher";

import { useEffect, useState } from "react";

const MainSectionContent = (props) => {
    const [inboxEmails, setInboxEmails] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInboxEmails().then((result) => {
            setInboxEmails(result);
            setLoading(false);
        }).catch((error) => {
            console.error("There was an error getting inbox emails", error);
        });
    }, []);

    return (
        <div onScroll={props.handleScroll} className="mainSectionContent">
            <MainSectionContentSortBar />
            {
                loading ?
                <div className="mainSectionLoading"> Loading... </div> :
                <EmailList onSelectItem={props.onSelectItem} emails={inboxEmails} />
            }
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