import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";
import EmailList from "./EmailList";

const MainSection = (props) => {
    return (
        <div className="mainSectionContainer">
            <div className="mainSection">
                <MainSectionHeader />
                <MainSectionContent />
            </div>
        </div>
    )
};

export default MainSection;