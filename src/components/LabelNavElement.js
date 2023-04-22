import { NavLink } from "react-router-dom";
import AnimatedButton from "./AnimatedButton";

const LabelNavElement = (props) => {
    return (
        <li className="navElement label">
            <AnimatedButton squared={false} classes="absolute viewWhenHover" svgData="M480.281 915.218q-22.542 0-38.52-15.968-15.979-15.968-15.979-38.391 0-21.893 15.927-38.267 15.927-16.374 38.293-16.374 22.824 0 38.52 16.445 15.696 16.445 15.696 38.522 0 22.077-15.698 38.055-15.697 15.978-38.239 15.978Zm0-285q-22.542 0-38.52-15.927-15.979-15.927-15.979-38.293 0-22.824 15.927-38.52 15.927-15.696 38.293-15.696 22.824 0 38.52 15.698 15.696 15.697 15.696 38.239 0 22.542-15.698 38.52-15.697 15.979-38.239 15.979Zm0-284.436q-22.542 0-38.52-16.14-15.979-16.14-15.979-38.804 0-22.665 15.927-38.643 15.927-15.979 38.293-15.979 22.824 0 38.52 16.12 15.696 16.12 15.696 38.785 0 22.665-15.698 38.663-15.697 15.998-38.239 15.998Z" />
            <NavLink className="navLink label" to={props.pathTo}>
                <svg className="navIcon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                    <path 
                        fill="#606367" 
                        d={props.svgData}
                    />
                </svg>
                <span className="navTitle">{props.title}</span>
            </NavLink>
        </li>
    );
};

export default LabelNavElement;