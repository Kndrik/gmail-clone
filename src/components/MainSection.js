import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

import { useState, useEffect, useMemo } from "react";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [triggerRefresh, setTriggerRefresh] = useState(false);
    //const selected = useRef([]);
    const [selected, setSelected] = useState([]);

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

    const askRefresh = () => {
        setTriggerRefresh(true);
    }

    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader emailsSelected={selected.length > 0} onRefresh={askRefresh} scrolled={scrolled} />
                <MainSectionContent selectedEmails={selected} changeSelection={changeSelection} onRefresh={() => setTriggerRefresh(false)} refresh={triggerRefresh} handleScroll={handleScroll} />
            </div>
        </div>
    )
};

export default MainSection;