import { Link, NavLink } from "react-router-dom";

const NavElement = (props) => {
    return (
        <li className="navElement">
            <NavLink className="navLink" to={props.pathTo}>
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

export default NavElement;