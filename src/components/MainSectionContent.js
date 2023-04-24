import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";

import { useState } from "react";

const MainSectionContent = (props) => {

    return (
        <div onScroll={props.handleScroll} className="mainSectionContent">
            <MainSectionContentSortBar />
            <EmailList />
        </div>
    )
};

export default MainSectionContent;