import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

import { useState } from "react";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [selected, setSelected] = useState([]);

    const handleScroll = (e) => {
        if(e.target.scrollTop > 0 && !scrolled) {
            setScrolled(true);
        } else if(e.target.scrollTop === 0 && scrolled) {
            setScrolled(false);
        }
    }

    const changeItemSelection = (item) => {
        
    }

    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader scrolled={scrolled} />
                <MainSectionContent handleScroll={handleScroll} onSelectItem={changeItemSelection}/>
            </div>
        </div>
    )
};

export default MainSection;