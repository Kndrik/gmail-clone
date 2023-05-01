import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";
import { useLocation } from "react-router-dom";

import { getInboxEmails, getSentEmails } from "../EmailFetcher";

import { useEffect, useState, memo, useRef } from "react";

const MainSectionContent = memo((props) => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        if (props.refresh) {
            refresh();
        }
    }, [props.refresh]);

    useEffect(() => {
        refresh();
    }, []);

    useEffect(() => {
        refresh();
    }, [location]);

    const sortEmails = (list, sortBy) => {
        const sorted = list.filter((email) => {
            return email[sortBy] === true;
        });

        setEmails(sorted);
    };

    const refresh = async () => {
        setLoading(true);

        let fetchedEmails = [];
        if (location.pathname.includes("sent")) {
            const result = await getSentEmails();
            fetchedEmails = result;
        } else {
            const result = await getInboxEmails();
            fetchedEmails = result;
        }
        
        const path = location.pathname;
        if (path.includes("starred") ||
            path.includes("imp")) {
            let trimmedPath = path.substring(path.lastIndexOf("/") +1);
            if (trimmedPath === "imp") {
                trimmedPath = "important";
            }
            sortEmails(fetchedEmails, trimmedPath);
        } else {
            setEmails(fetchedEmails);
        }

        setLoading(false);
        props.onRefresh();
    }

    const removeEmail = () => {
        refresh();
    }

    return (
        <div onScroll={props.handleScroll} className="mainSectionContent">
            <MainSectionContentSortBar />
            {
                loading ?
                <div>Loading...</div>
                :
                <EmailList deleteEmail={props.deleteEmails} selectedEmails={props.selectedEmails} changeSelection={props.changeSelection} emails={emails} />
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
});

export default MainSectionContent;