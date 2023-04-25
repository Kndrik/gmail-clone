import contactsImg from "../images/contacts.png";
import calendarImg from "../images/calendar.png";
import ToolButton from "./ToolButton";
import { useState } from "react";

const Toolbar = (props) => {
    const [reduced, setReduced] = useState(false);

    return (
        reduced ?
        <div className="toolBar reduced">
            <button onClick={() => setReduced(false)} className="toolBarExpandButton">
                +
            </button>
        </div>
        :
        <div className="toolBar">
            <div className="toolBarTop">
                <ul className="toolBarList">
                    <ToolButton image={calendarImg} />
                    <ToolButton image={contactsImg} />
                </ul>
                <div className="toolBarLimitation"></div>
                <ul className="toolBarList">
                    <ToolButton svgData="M440.391 865.609v-250h-250v-79.218h250v-250h79.218v250h250v79.218h-250v250h-79.218Z" />
                </ul>
            </div>
            <div className="toolBarBottom">
                <ul className="toolBarList">
                    <ToolButton clickEvent={() => setReduced(true)} size={20} svgData="M375 829.566 318.434 773l198-198-198-198L375 320.434 629.566 575 375 829.566Z" />
                </ul>
            </div>
        </div>
    );
};

export default Toolbar;