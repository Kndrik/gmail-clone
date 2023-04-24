import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

import { useState } from "react";

const MainSection = (props) => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = (e) => {
        if(e.target.scrollTop > 0 && !scrolled) {
            setScrolled(true);
        } else if(e.target.scrollTop === 0 && scrolled) {
            setScrolled(false);
        }
    }

    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader scrolled={scrolled} />
                <MainSectionContent handleScroll={handleScroll} />
            </div>
        </div>
    )
};

export default MainSection;