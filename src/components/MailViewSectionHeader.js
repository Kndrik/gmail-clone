import AnimatedButton from "./AnimatedButton";

const MailViewSectionHeader = (props) => {
    return (
        <div className={"mainSectionHeader" + (props.scrolled ? " scrolled" : "")}>
            <div className="left">
                <div className="mainSectionHeaderButtons">
                    <AnimatedButton clickEvent={() => window.history.back()} light={true} size={17} svgData="M480 902.218 153.782 576 480 249.782l56.131 55.566-230.477 231.043h500.564v79.218H305.654l230.477 230.478L480 902.218Z" />
                    <AnimatedButton light={true} size={17} svgData="M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-523q0-17.826 3.848-30.87t13.543-23.739l56-76q10.261-10.696 23.588-15.892 13.326-5.196 30.538-5.196h493.228q17.212 0 30.038 5.196 12.827 5.196 23.653 15.892l57 76q9.13 10.695 13.261 23.739 4.13 13.044 4.13 30.87v523q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087ZM199.826 322h559.913l-36.409-46H235.943l-36.117 46Zm-14.739 60v488.913h589.826V382H185.087ZM480 782.609 643.913 619.26l-45.652-46.217-83.739 83.739v-199.87h-68.479v199.87l-84.304-83.739-45.087 46.217L480 782.609Zm-294.913 88.304h589.826-589.826Z" />
                    <AnimatedButton light={true} size={17} svgData="M256.478 950.131q-33.49 0-56.637-22.981-23.147-22.98-23.147-56.237V310.522h-50.609v-79.218h212.306v-40.175h282.653v40.175h212.871v79.218h-50.609v560.391q0 32.507-23.522 55.862-23.522 23.356-56.262 23.356H256.478Zm447.044-639.609H256.478v560.391h447.044V310.522Zm-343.87 478.913h69.609v-399h-69.609v399Zm171.087 0h70.174v-399h-70.174v399ZM256.478 310.522v560.391-560.391Z" />
                </div>
            </div>
            <div className="right">
                <AnimatedButton light={true} squared={true} classes="mailAmountButton" text="1-50 sur 4258" />
                <AnimatedButton light={true} size={12} svgData="M426.667 1002.67 0 576l426.667-426.667 87.666 88.333L175.999 576l338.334 338.334-87.666 88.336Z" />
                <AnimatedButton light={true} size={12} svgData="M309.666 1001.33 222 913l338.334-338.333L222 236.333 309.666 148l426.667 426.667-426.667 426.663Z" />
            </div>
        </div>
    )
};

export default MailViewSectionHeader;