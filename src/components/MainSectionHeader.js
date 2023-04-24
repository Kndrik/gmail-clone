import AnimatedButton from "./AnimatedButton";
import inputImage from "../images/input.png";

const MainSectionHeader = (props) => {
    return (
        <div className="mainSectionHeader">
            <div className="left">
                <div className="container">
                    <AnimatedButton light={true} squared={true} svgData="M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Z" />
                    <AnimatedButton light={true} squared={true} svgData="M480 709.566 256.825 487.391h446.35L480 709.566Z" />
                </div>
                <AnimatedButton light={true} size={17} svgData="M477 921q-143 0-244-101T132 576.247q0-142.754 101-244.5Q334 230 477 230q91 0 160.395 36.723Q706.789 303.445 757 369V230h72v291H537v-71h164q-39-56-94-90.5T477 325q-105.25 0-178.125 72.823Q226 470.647 226 575.823 226 681 298.883 754q72.884 73 178.145 73Q555 827 621.5 782 688 737 716 663h97q-30 115-123.255 186.5Q596.489 921 477 921Z" />
                <AnimatedButton light={true} size={17} svgData="M480.5 942q-39.5 0-67.5-27.906T385 847q0-39.6 27.906-67.8Q440.812 751 480 751q40 0 67.5 28.075t27.5 67.5Q575 886 547.5 914t-67 28Zm0-271q-39.5 0-67.5-27.906T385 576q0-40 27.906-67.5T480 481q40 0 67.5 27.5t27.5 67q0 39.5-27.5 67.5t-67 28Zm0-270q-39.5 0-67.5-28.283t-28-68Q385 265 412.906 237.5T480 210q40 0 67.5 27.5t27.5 67.217q0 39.717-27.5 68T480.5 401Z" />
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