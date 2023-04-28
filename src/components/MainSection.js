import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

import { useRef, useState } from "react";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [selected, setSelected] = useState([]);
    const [triggerRefresh, setTriggerRefresh] = useState(false);

    const handleScroll = (e) => {
        if(e.target.scrollTop > 0 && !scrolled) {
            setScrolled(true);
        } else if(e.target.scrollTop === 0 && scrolled) {
            setScrolled(false);
        }
    }

    const changeItemSelection = (item) => {
        
    }

    const askRefresh = () => {
        setTriggerRefresh(true);
    }

    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader onRefresh={askRefresh} scrolled={scrolled} />
                <MainSectionContent onRefresh={() => setTriggerRefresh(false)} refresh={triggerRefresh} handleScroll={handleScroll} onSelectItem={changeItemSelection}/>
            </div>
        </div>
    )
};

export default MainSection;