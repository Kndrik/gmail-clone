import MainSectionHeader from "./MainSectionHeader";
import MainSectionContent from "./MainSectionContent";

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