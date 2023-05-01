import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

import { useState, useContext } from "react";

import { ToastContext } from "../pages/Mails";

import { useLocation } from "react-router-dom";

import { deleteInboxEmails, deleteSentEmails } from "../EmailFetcher";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [triggerRefresh, setTriggerRefresh] = useState(false);
    //const selected = useRef([]);
    const [selected, setSelected] = useState([]);
    const location = useLocation();
    const toast = useContext(ToastContext);

    const handleScroll = (e) => {
        if(e.target.scrollTop > 0 && !scrolled) {
            setScrolled(true);
        } else if(e.target.scrollTop === 0 && scrolled) {
            setScrolled(false);
        }
    };

    const changeSelection = (id) => {
        let newArray = selected.slice();
        if (newArray.includes(id)) {
            newArray.splice(newArray.indexOf(id), 1);
        } else {
            newArray.push(id);
        }
        setSelected(newArray);
    };

    const deleteSelected = async (id) => {
        toast("Deleting...");

        const toDelete = id ? [id] : selected;
    
        if (location.pathname.includes("sent")) {
            deleteSentEmails(toDelete).then(result => {
                toast("Message(s) have been deleted.", true);
                setSelected([]);
                askRefresh();
            }).catch(error => {
                console.error("There was a problem deleting messages", error);
            });
        } else {
            deleteInboxEmails(toDelete).then(result => {
                toast("Message(s) have been deleted.", true);
                setSelected([]);
                askRefresh();
            }).catch(error => {
                console.error("There was a problem deleting messages", error);
            });
        }
    }

    const askRefresh = () => {
        setTriggerRefresh(true);
    }

    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader deleteEmails={deleteSelected} emailsSelected={selected.length > 0} onRefresh={askRefresh} scrolled={scrolled} />
                <MainSectionContent deleteEmails={deleteSelected} selectedEmails={selected} changeSelection={changeSelection} onRefresh={() => setTriggerRefresh(false)} refresh={triggerRefresh} handleScroll={handleScroll} />
            </div>
        </div>
    )
};

export default MainSection;