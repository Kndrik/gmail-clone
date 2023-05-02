import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";
import MailView from "./MailView";
import MailViewSectionHeader from "./MailViewSectionHeader";

import { useState, useContext, useEffect } from "react";

import { ToastContext } from "../pages/Mails";

import { useLocation } from "react-router-dom";

import { deleteInboxEmails, deleteSentEmails } from "../EmailFetcher";

import { Routes, Route } from "react-router-dom";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [triggerUnselect, setTriggerUnselect] = useState(false);
    const [triggerRefresh, setTriggerRefresh] = useState(false);
    const [selected, setSelected] = useState([]);
    const [markAsRead, setMarkAsRead] = useState(false);
    const location = useLocation();
    const toast = useContext(ToastContext);

    useEffect(() => {
        setSelectAll(false);
        setTriggerUnselect(true);
        setSelected([]);
    }, [location]);
    
    useEffect(() => {
        if (selected.length <= 0 && markAsRead) {
            setMarkAsRead(false);
            askRefresh();
        }
    }, [selected]);

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

    const triggerRead = () => {
        setMarkAsRead(true);
        setTriggerUnselect(true);
    }

    const changeSelectionAll = () => {
        setSelectAll(!selectAll);

        if(selectAll) {
            setTriggerUnselect(true);
        }
    }

    const deleteSelected = async (singleId) => {
        toast("Deleting...");
       
        let toDelete;
        if (typeof(singleId) === "string") {
            toDelete = [singleId];
        } else {
            toDelete = selected;
        }
    
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
                <Routes>
                    <Route 
                        path='view/:mailId'
                        element={<MailViewSectionHeader handleScroll={handleScroll} />}
                    />
                    <Route 
                        path='/*'
                        element={                
                            <MainSectionHeader 
                                setMarkAsRead={triggerRead}
                                allSelected={selectAll}
                                changeSelection={changeSelectionAll} 
                                deleteEmails={deleteSelected} 
                                emailsSelected={selected.length > 0} 
                                onRefresh={askRefresh} 
                                scrolled={scrolled} 
                            />
                        }
                    />
                </Routes>
                <Routes>
                    <Route 
                        path='view/:mailId' 
                        element={
                            <MailView />
                        }
                    />
                    <Route 
                        path='/*' 
                        element={                
                            <MainSectionContent 
                                markAsRead={markAsRead}
                                setSelectAll={setSelectAll}
                                setUnselectAll={setTriggerUnselect}
                                unselectAll={triggerUnselect}
                                selectAll={selectAll} 
                                deleteEmails={deleteSelected} 
                                selectedEmails={selected} 
                                changeSelection={changeSelection} 
                                onRefresh={() => setTriggerRefresh(false)} 
                                refresh={triggerRefresh} 
                                handleScroll={handleScroll} 
                            />
                        } 
                    />
                </Routes>
            </div>
        </div>
    )
};

export default MainSection;