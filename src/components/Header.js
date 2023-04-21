import logo from "../images/logo_gmail.png";

const Header = (props) => {
    return (
        <div className="header">
            <div className="leftContainer">
                <div className="menuSvgContainer">
                    <svg className="menuIcon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path fill="#606367" d="M150 816q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150 756h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 816H150Zm0-210q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150 546h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 606H150Zm0-210q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T150 336h660q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T810 396H150Z"/></svg>
                </div>
                <img className="gmailLogo" src={logo} alt="gmail logo" />
            </div>
            <div className="searchContainer">

            </div>
            <div className="rightContainer">

            </div>
        </div>
    );
};

export default Header;