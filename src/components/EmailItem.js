import AnimatedButtonEmailItem from "./AnimatedButtonEmailItem";
import { useState, useEffect, useRef } from "react";

import { updateInboxEmail, updateSentEmail } from "../EmailFetcher";

const EmailItem = (props) => {
    const [hover, setHover] = useState(false);
    const [selected, setSelected] = useState(false);
    const [unread, setUnread] = useState(props.unread);
    const [important, setImportant] = useState(props.important);
    const [starred, setStarred] = useState(props.starred);
    const previousUnread = useRef(props.unread);
    const previousImportant = useRef(props.important);
    const previousStarred = useRef(props.starred);

    useEffect(() => {
        if (previousUnread.current == unread &&
            previousImportant.current == important &&
            previousStarred.current == starred) {
                return;
        }
        previousUnread.current = unread;
        previousImportant.current = important;
        previousStarred.current = starred;
        updateFirestoreEmail();
    }, [unread, important, starred]);

    const updateFirestoreEmail = () => {
        const updatedData = {
            read: !unread,
            important: important,
            starred: starred
        };

        if (props.inboxEmail) {
            updateInboxEmail(props.id, updatedData);
        } else {
            updateSentEmail(props.id, updatedData);
        }
    }

    return (
        <div 
            className={"emailItem" + 
                (props.selected ? " selected" : "") + 
                (unread ? " unread" : "") + 
                (important ? " important" : "") +
                (starred ? " starred" : "")}
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)}
        >
            <AnimatedButtonEmailItem 
                clickEvent={() => props.changeSelection(props.id)} 
                size={18} 
                svgData= {
                    (props.selected ? 
                    "m419.348 749.87 293.638-294.203-59.957-60.334-233.681 233.493-111.681-111.493-59.957 60.334L419.348 749.87ZM192.319 951.827q-36.44 0-62.293-25.853t-25.853-62.293V288.319q0-36.595 25.853-62.559t62.293-25.964h575.362q36.595 0 62.559 25.964t25.964 62.559v575.362q0 36.44-25.964 62.293t-62.559 25.853H192.319Zm0-88.146h575.362V288.319H192.319v575.362Zm0-575.362v575.362-575.362Z"
                    :
                    "M185.087 950.131q-32.507 0-55.862-23.356-23.356-23.355-23.356-55.862V281.087q0-32.74 23.356-56.262 23.355-23.521 55.862-23.521h589.826q32.74 0 56.262 23.521 23.521 23.522 23.521 56.262v589.826q0 32.507-23.521 55.862-23.522 23.356-56.262 23.356H185.087Zm0-79.218h589.826V281.087H185.087v589.826Z")
                }
            />
            <AnimatedButtonEmailItem 
                clickEvent={() => {
                    setStarred(!starred);
                }}
                classes="star"
                size={18} 
                svgData={
                    starred ?
                    "m233 976 65-281L80 506l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Z"
                    :
                    "m330.955 839.672 149.066-89 149.066 90.023-40.305-168.391 131.217-114.347-172.956-14.87L480 384.131l-67.043 158.521-172.956 14.305 131.427 113.796-40.473 168.919ZM212.086 1005.39l70.652-305.303L45.52 494.695l312.645-26.579L480 179.824l121.835 288.292 312.645 26.579-237.218 205.392 71.217 305.303L480 842.827 212.086 1005.39ZM480 622.13Z"
                }
            />
            <AnimatedButtonEmailItem 
                clickEvent={() => {
                    setImportant(!important);
                }}
                classes="important"
                size={18} 
                svgData={
                    important ?
                    "m120 856 180-280-180-280h478q22 0 40 11.5t31 28.5l171 240-171 240q-13 17-31 28.5T598 856H120Z"
                    :
                    "M98.52 870.131 287.566 576 98.521 281.304h501.175q26.522 0 48.386 13.162 21.865 13.163 37.31 34.186L861.479 576 685.392 824.479q-15.044 19.66-36.295 32.656-21.252 12.996-46.575 12.996H98.521Zm145.611-79.218h367.565L763.739 576 611.696 361.087H244.131L382.74 576 244.131 790.913ZM382.74 576 244.131 361.087 382.74 576 244.131 790.913 382.74 576Z" 
                }
            />
            <span className="emailItemSender">{props.inboxEmail ? props.sender : ("To : " + props.sender)}</span>
            <span className="emailItemTitle">{props.title}</span>
            {
                hover ?
                <div className="hoverItems">
                    <AnimatedButtonEmailItem size={18} svgData="M189.058 942.696q-30.994 0-53.374-22.38-22.38-22.38-22.38-53.374V351.609q0-16.276 4.065-28.511 4.066-12.236 12.863-22.7l56-73.253q9.116-10.464 21.471-15.428t27.887-4.964h488.82q15.532 0 27.554 4.964 12.022 4.964 21.297 15.428l56.667 73.253q8.637 10.464 12.782 22.7 4.145 12.235 4.145 28.511v515.333q0 30.994-22.427 53.374-22.426 22.38-53.486 22.38H189.058Zm15.55-616.03h550.276l-35.606-44H239.975l-35.367 44Zm-15.55 66.667v473.609h581.884V393.333H189.058ZM480 794.405l161-160.761-47.964-48.282-77.63 77.631V473.47h-70.652v189.523l-77.79-77.631-47.805 48.282L480 794.405Zm-290.942 72.537h581.884-581.884Z" />
                    <AnimatedButtonEmailItem size={18} svgData="M262.246 951.827q-37.095 0-62.809-25.603t-25.714-62.543V321.087h-51.406v-88.146H341.26v-44.449h276.726v44.449h219.697v88.146h-51.406v542.594q0 36.44-25.964 62.293t-62.559 25.853H262.246Zm435.508-630.74H262.246v542.594h435.508V321.087ZM356.377 784.768h77.405v-386h-77.405v386Zm169.841 0H604v-386h-77.782v386ZM262.246 321.087v542.594-542.594Z" />
                    <AnimatedButtonEmailItem 
                        clickEvent={() => {
                            setUnread(!unread);
                        }} 
                        size={18} svgData="M152.319 911.827q-36.44 0-62.293-25.853t-25.853-62.293V328.319q0-36.595 25.853-62.559t62.293-25.964h655.362q36.595 0 62.559 25.964t25.964 62.559v495.362q0 36.44-25.964 62.293t-62.559 25.853H152.319ZM480 621.493 152.319 406.159v417.522h655.362V406.159L480 621.493Zm0-81.174 325.015-212H155.652l324.348 212Zm-327.681-134.16v-77.84V823.681 406.159Z" />
                    <AnimatedButtonEmailItem size={18} svgData="m615.029 769.971 59.406-58.275-152.13-152.884v-189.03h-80.609V591.72l173.333 178.251ZM480.052 991.827q-86.154 0-161.93-32.69-75.777-32.69-132.165-89.064Q129.57 813.7 96.871 737.942q-32.698-75.758-32.698-161.901 0-86.143 32.772-161.962 32.772-75.819 89.044-132.09 56.271-56.272 132.055-89.232Q393.828 159.796 480 159.796q86.172 0 161.956 32.961 75.784 32.96 132.055 89.232 56.272 56.271 89.232 132.055Q896.204 489.828 896.204 576q0 86.172-32.961 161.956-32.96 75.784-89.232 132.055-56.271 56.272-132.038 89.044-75.768 32.772-161.921 32.772ZM480 576Zm-.193 327.681q135.41 0 231.642-95.761 96.232-95.76 96.232-231.732 0-135.971-96.18-231.92-96.181-95.949-231.496-95.949-135.599 0-231.643 95.902Q152.319 440.124 152.319 576q0 136.16 96.038 231.92 96.039 95.761 231.45 95.761Z" />
                </div>
                :
                <span className="emailItemDate">{props.date}</span>
            }
        </div>
    );
};

export default EmailItem;