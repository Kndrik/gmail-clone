import { useState } from "react";
import SidebarNav from "./SidebarNav";

const Sidebar = (props) => {
    const [hovering, setHovering] = useState(false);

    return (
        <div 
            className={"sidebar" + (props.reduced && !hovering ? " reduced" : "")}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}>
            <div className="sidebarTop">
                <div className="newMessageContainer">
                    <button 
                        onClick={props.openEmailWindow}
                        className={"newMessageButton" + (props.reduced && !hovering ? " reduced" : "")}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path d="M187 877h32l435-437-32-32-435 437v32Zm610-479L665 266l37.823-38.823Q723 207 752 207t52 21l33 32q23 22 20.5 51t-22.463 48.963L797 398ZM162.327 948q-19.889 0-33.608-13.714Q115 920.571 115 900.689v-65.627q0-9.062 3.5-17.562Q122 809 129 802l494-494 133 131-494 495q-7 7-16.217 10.5Q236.565 948 228 948h-65.673ZM639 424l-17-16 32 32-15-16Z"/></svg>
                        {
                            props.reduced && !hovering ?
                            null :
                            <span>Nouveau message</span>
                        }
                    </button>
                </div>
            </div>
            <SidebarNav reduced={props.reduced && !hovering} />
        </div>
    );
};

export default Sidebar;