import AnimatedButton from "./AnimatedButton";

const MainSectionHeader = (props) => {
    return (
        <div className={"mainSectionHeader" + (props.scrolled ? " scrolled" : "")}>
            <div className="left">
                <div className="container">
                    <AnimatedButton clickEvent={props.changeSelection} size={18} light={true} squared={true} 
                        svgData={ 
                            props.emailsSelected ?
                            (
                                props.allSelected ?
                                "m417.87 745.74 295.217-295.783-54.305-54.87L417.87 635.999 303.957 522.087l-54.305 54.87L417.87 745.74ZM185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Zm0-589.826v589.826-589.826Z"
                                :
                                "M250 610.218h461v-72.436H250v72.436Zm-64.913 339.913q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Zm0-589.826v589.826-589.826Z"
                            )
                            :
                            "M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Z"
                        }
                    />
                    <AnimatedButton light={true} squared={true} svgData="M480 709.566 256.825 487.391h446.35L480 709.566Z" />
                </div>
                {
                    props.emailsSelected ?
                    <div className="mainSectionHeaderButtons">
                        <div className="left">
                            <AnimatedButton light={true} size={17} svgData="M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862v-523q0-17.826 3.848-30.87t13.543-23.739l56-76q10.261-10.696 23.588-15.892 13.326-5.196 30.538-5.196h493.228q17.212 0 30.038 5.196 12.827 5.196 23.653 15.892l57 76q9.13 10.695 13.261 23.739 4.13 13.044 4.13 30.87v523q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087ZM199.826 322h559.913l-36.409-46H235.943l-36.117 46Zm-14.739 60v488.913h589.826V382H185.087ZM480 782.609 643.913 619.26l-45.652-46.217-83.739 83.739v-199.87h-68.479v199.87l-84.304-83.739-45.087 46.217L480 782.609Zm-294.913 88.304h589.826-589.826Z" />
                            <AnimatedButton clickEvent={props.deleteEmails} classes={"separator"} light={true} size={17} svgData="M256.478 950.131q-33.49 0-56.637-22.981-23.147-22.98-23.147-56.237V310.522h-50.609v-79.218h212.306v-40.175h282.653v40.175h212.871v79.218h-50.609v560.391q0 32.507-23.522 55.862-23.522 23.356-56.262 23.356H256.478Zm447.044-639.609H256.478v560.391h447.044V310.522Zm-343.87 478.913h69.609v-399h-69.609v399Zm171.087 0h70.174v-399h-70.174v399ZM256.478 310.522v560.391-560.391Z" />
                        </div>
                        <AnimatedButton clickEvent={props.setMarkAsRead} light={true} size={17} svgData="m480 122.999 374.391 223.696q23.218 12.957 31.762 32.979 8.543 20.022 8.543 41.805V874.87q0 32.506-23.521 55.862-23.522 23.356-56.262 23.356H145.087q-32.507 0-55.862-23.356-23.356-23.356-23.356-55.862V421.479q0-21.783 8.478-41.805 8.479-20.022 31.262-32.979L480 122.999Zm0 477.871 326.956-191.913L480 212.044 153.044 408.957 480 600.87Zm0 73.782L145.087 478.044V874.87h669.826V478.044L480 674.652Zm0 200.218h334.913-669.826H480Z" />
                    </div>
                    :
                    <div className="mainSectionHeaderButtons">
                        <AnimatedButton clickEvent={props.onRefresh} light={true} size={17} svgData="M477 921q-143 0-244-101T132 576.247q0-142.754 101-244.5Q334 230 477 230q91 0 160.395 36.723Q706.789 303.445 757 369V230h72v291H537v-71h164q-39-56-94-90.5T477 325q-105.25 0-178.125 72.823Q226 470.647 226 575.823 226 681 298.883 754q72.884 73 178.145 73Q555 827 621.5 782 688 737 716 663h97q-30 115-123.255 186.5Q596.489 921 477 921Z" />
                        <AnimatedButton light={true} size={17} svgData="M480.5 942q-39.5 0-67.5-27.906T385 847q0-39.6 27.906-67.8Q440.812 751 480 751q40 0 67.5 28.075t27.5 67.5Q575 886 547.5 914t-67 28Zm0-271q-39.5 0-67.5-27.906T385 576q0-40 27.906-67.5T480 481q40 0 67.5 27.5t27.5 67q0 39.5-27.5 67.5t-67 28Zm0-270q-39.5 0-67.5-28.283t-28-68Q385 265 412.906 237.5T480 210q40 0 67.5 27.5t27.5 67.217q0 39.717-27.5 68T480.5 401Z" />
                    </div>
                }
            </div>
            <div className="right">
                <AnimatedButton light={true} squared={true} classes="mailAmountButton" text="1-50 sur 4258" />
                <AnimatedButton light={true} size={12} svgData="M426.667 1002.67 0 576l426.667-426.667 87.666 88.333L175.999 576l338.334 338.334-87.666 88.336Z" />
                <AnimatedButton light={true} size={12} svgData="M309.666 1001.33 222 913l338.334-338.333L222 236.333 309.666 148l426.667 426.667-426.667 426.663Z" />
            </div>
        </div>
    )
};

export default MainSectionHeader;