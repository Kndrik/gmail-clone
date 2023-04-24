import MainSectionContentSortBar from "./MainSectionContentSortBar";
import EmailList from "./EmailList";

const MainSectionContent = (props) => {
    return (
        <div className="mainSectionContent">
            <MainSectionContentSortBar />
            <EmailList />
        </div>
    )
};

export default MainSectionContent;