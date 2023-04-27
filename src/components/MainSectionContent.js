import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";
import { useLocation } from "react-router-dom";

import { getInboxEmails, getSentEmails } from "../EmailFetcher";

import { useEffect, useState, useRef } from "react";

const MainSectionContent = (props) => {
    const [emails, setEmails] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const receivedEmails = useRef([]);
    const sentEmails = useRef([]);
    

    useEffect(() => {
        getInboxEmails().then((result) => {
            receivedEmails.current = result;
            setEmails(receivedEmails.current);
            setLoading(false);
        }).catch((error) => {
            console.error("There was an error getting inbox emails", error);
        });

        getSentEmails().then((result) => {
            sentEmails.current = result;
            setLoading(false);
        }).catch((error) => {
            console.error("There was an error getting sent emails", error);
        })
    }, []);

    useEffect(() => {
        if (location.pathname.includes("inbox")) {
            setEmails(receivedEmails.current);
        } else if (location.pathname.includes("sent")) {
            setEmails(sentEmails.current);
        }
    }, [location]);

    return (
        <div onScroll={props.handleScroll} className="mainSectionContent">
            <MainSectionContentSortBar />
            {
                loading ?
                <div className="mainSectionLoading"> Loading... </div> :
                <EmailList onSelectItem={props.onSelectItem} emails={emails} />
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