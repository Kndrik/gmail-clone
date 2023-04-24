import AnimatedButtonEmailItem from "./AnimatedButtonEmailItem";

const EmailItem = (props) => {
    return (
        <div className="emailItem">
            <AnimatedButtonEmailItem size={18} svgData="M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Z" />
            <AnimatedButtonEmailItem size={18} svgData="m330.955 839.672 149.066-89 149.066 90.023-40.305-168.391 131.217-114.347-172.956-14.87L480 384.131l-67.043 158.521-172.956 14.305 131.427 113.796-40.473 168.919ZM212.086 1005.39l70.652-305.303L45.52 494.695l312.645-26.579L480 179.824l121.835 288.292 312.645 26.579-237.218 205.392 71.217 305.303L480 842.827 212.086 1005.39ZM480 622.13Z" />
            <AnimatedButtonEmailItem size={18} svgData="M98.52 870.131 287.566 576 98.521 281.304h501.175q26.522 0 48.386 13.162 21.865 13.163 37.31 34.186L861.479 576 685.392 824.479q-15.044 19.66-36.295 32.656-21.252 12.996-46.575 12.996H98.521Zm145.611-79.218h367.565L763.739 576 611.696 361.087H244.131L382.74 576 244.131 790.913ZM382.74 576 244.131 361.087 382.74 576 244.131 790.913 382.74 576Z" />
            <span className="emailItemSender">{props.sender}</span>
            <span className="emailItemTitle">{props.title}</span>
            <span className="emailItemDate">{props.date}</span>
        </div>
    );
};

export default EmailItem;