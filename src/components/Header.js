import { useState, useRef } from "react";

import logo from "../images/logo_gmail.png";
import profile from "../images/placeholder_pic.png";

import HeaderButton from "./HeaderButton";
import ProfilePicture from "./ProfilePicture";

const Header = (props) => {
    const [focusing, setFocusing] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const input = useRef(null);

    const submitSearch = (e) => {
        e.preventDefault();
        input.current.blur();
    }

    const deleteSearch = (e) => {
        e.preventDefault();
        setSearchValue('');
        input.current.focus();
    }

    return (
        <div className="header">
            <div className="leftContainer">
                <div className="menuSvgContainer">
                    <svg className="menuIcon" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="24"><path fill="#606367" d="M110.391 831.827v-79.218h739.218v79.218H110.391Zm0-216.218v-79.218h739.218v79.218H110.391Zm0-216.218v-79.783h739.218v79.783H110.391Z"/></svg>
                </div>
                <img className="gmailLogo" src={logo} alt="gmail logo" />
            </div>
            <div className={"searchContainer " + (focusing ? "focused" : "")}>
                <form className="searchForm" onSubmit={submitSearch}>
                    <HeaderButton type={"submit"} clickEvent={submitSearch} light={focusing} classes="search" svgData="M766.652 922.044 529.043 685.001q-29.434 24.26-69.111 37.934-39.676 13.674-85.323 13.674-112.119 0-189.864-77.826Q106.999 580.957 106.999 471t77.827-187.783q77.826-77.826 188.283-77.826 110.456 0 187.782 77.826 77.327 77.826 77.327 187.933 0 43.98-13.152 83.133-13.153 39.152-39.457 73.587l239.609 237.608q11.826 11.833 11.826 28.069 0 16.236-12.739 28.41-12.077 12.478-29.174 12.478t-28.479-12.391ZM373.808 657.391q77.659 0 131.425-54.533Q558.999 548.326 558.999 471q0-77.326-53.849-131.858-53.849-54.533-131.342-54.533-78.326 0-132.958 54.533Q186.218 393.674 186.218 471q0 77.326 54.549 131.858 54.549 54.533 133.041 54.533Z" /> 
                    <div className="searchInputContainer">
                        <input 
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onBlur={() => setFocusing(false)} 
                            onFocus={() => setFocusing(true)} 
                            ref={input} 
                            className="searchInput" 
                            type="text" 
                            placeholder="Rechercher dans les messages" 
                        />
                    </div>
                    <HeaderButton clickEvent={deleteSearch} light={focusing} classes={"delete" + (searchValue.length > 0 ? '' : ' hide')} svgData="M480 631.566 276.783 834.783Q264.957 846.609 249 846.609t-27.783-11.826Q209.391 822.957 209.391 807t11.826-27.783L424.434 576 221.217 372.783Q209.391 360.957 209.391 345t11.826-27.783q11.826-11.826 27.783-11.826t27.783 11.826L480 520.434l203.217-203.217q11.826-11.826 27.783-11.826t27.783 11.826q11.826 11.826 11.826 27.783t-11.826 27.783L535.566 576l203.217 203.217q11.826 11.826 11.826 27.783t-11.826 27.783Q726.957 846.609 711 846.609t-27.783-11.826L480 631.566Z" />
                    <HeaderButton light={focusing} classes="tune" svgData="M146.609 867.001q-15.393 0-25.806-10.654-10.412-10.654-10.412-26.027 0-15.373 10.412-25.847Q131.216 794 146.609 794h187q15.18 0 25.981 10.543 10.801 10.543 10.801 26.128 0 15.373-10.801 25.851-10.801 10.479-25.981 10.479h-187Zm0-509.001q-15.393 0-25.806-10.543-10.412-10.543-10.412-26.128 0-15.373 10.412-25.851 10.413-10.479 25.806-10.479h353q15.18 0 25.981 10.654 10.801 10.654 10.801 26.027 0 15.373-10.801 25.847Q514.789 358 499.609 358h-353Zm313.726 591.001q-15.205 0-25.965-10.604-10.761-10.603-10.761-26.179v-165q0-15.393 10.817-25.805Q445.243 711 460.448 711q15.204 0 25.683 10.413 10.478 10.412 10.478 25.805V794h316.782q15.393 0 25.806 10.543 10.412 10.543 10.412 26.128 0 15.373-10.412 25.851-10.413 10.479-25.806 10.479H496.609v45.217q0 15.576-10.429 26.179-10.428 10.604-25.845 10.604ZM333.552 694.218q-15.204 0-25.683-10.413-10.478-10.412-10.478-25.805v-45.782H146.609q-15.393 0-25.806-10.429-10.412-10.429-10.412-25.845 0-15.417 10.412-25.789 10.413-10.373 25.806-10.373h150.782V492q0-15.393 10.429-25.805 10.428-10.413 25.845-10.413 15.205 0 25.965 10.413 10.761 10.412 10.761 25.805v166q0 15.393-10.817 25.805-10.817 10.413-26.022 10.413Zm126.839-82q-15.18 0-25.981-10.429-10.801-10.429-10.801-25.845 0-15.417 10.801-25.789 10.801-10.373 25.981-10.373h353q15.393 0 25.806 10.429 10.412 10.429 10.412 25.845 0 15.417-10.412 25.789-10.413 10.373-25.806 10.373h-353ZM626.335 441q-15.205 0-25.965-10.413-10.761-10.412-10.761-25.805v-165q0-15.576 10.817-26.179 10.817-10.604 26.022-10.604 15.204 0 25.683 10.604 10.478 10.603 10.478 26.179v45.217h150.782q15.393 0 25.806 10.654 10.412 10.654 10.412 26.027 0 15.373-10.412 25.847Q828.784 358 813.391 358H662.609v46.782q0 15.393-10.429 25.805Q641.752 441 626.335 441Z" />
                </form>
            </div>
            <div className="rightContainer">
                <HeaderButton light={true} classes="" svgData="M482.898 809q17.102 0 29.798-12.724 12.695-12.724 12.695-30.188 0-17.465-12.723-29.798-12.724-12.334-30.109-12.334t-29.798 12.317q-12.413 12.316-12.413 30.154 0 17.182 12.514 29.877Q465.377 809 482.898 809Zm-2.554 181.131q-86.203 0-161.506-32.395-75.302-32.395-131.741-88.833-56.438-56.439-88.833-131.738-32.395-75.299-32.395-161.587 0-86.288 32.395-161.665t88.745-131.345q56.349-55.968 131.69-88.616 75.34-32.648 161.676-32.648 86.335 0 161.779 32.604t131.37 88.497q55.926 55.893 88.549 131.452 32.623 75.559 32.623 161.877 0 86.281-32.648 161.575-32.648 75.293-88.616 131.478-55.968 56.186-131.426 88.765-75.459 32.579-161.662 32.579Zm.156-79.218q139.239 0 236.826-97.732 97.587-97.732 97.587-237.681 0-139.239-97.4-236.826-97.399-97.587-237.796-97.587-139.021 0-236.826 97.4-97.804 97.399-97.804 237.796 0 139.021 97.732 236.826 97.732 97.804 237.681 97.804ZM480 576Zm1.652-170.956q26.79 0 47.264 16.764 20.475 16.764 20.475 42.262 0 24.1-14.235 42.313-14.234 18.213-32.243 33.095-23 19.565-40.283 43.341-17.282 23.776-17.282 52.79 0 12.438 9.587 19.915Q464.522 663 477.304 663q13.696 0 22.984-9.13 9.288-9.131 13.234-22.261 3.565-19.305 15.126-34.909 11.562-15.605 27.713-28.223 24.204-19.651 39.639-47.281 15.435-27.63 15.435-58.411 0-51.089-36.935-86.002t-87.629-34.913q-37.677 0-71.405 15.847-33.727 15.848-56.423 45.979-7.565 11.13-6.818 24.309.748 13.179 11.483 21.343 13.111 8.565 27.321 5.283 14.209-3.283 23.493-15.413 11.619-15.642 29.286-24.908 17.667-9.266 37.844-9.266Z" />
                <HeaderButton light={true} classes="" svgData="M549.391 990.131H410.609q-14.957 0-26.566-9.261-11.609-9.261-13.609-24.218l-15.435-97.043q-15.608-5.304-34.065-15.891-18.456-10.587-31.63-21.326l-89.043 41.87q-14.391 6.695-29.066 1.782-14.674-4.913-22.369-19.304L78.869 722.391Q70.608 709 74.456 694.326q3.848-14.674 15.674-23.935l82.608-60.174q-1.434-7.304-1.934-17.108-.5-9.805-.5-17.109 0-7.304.5-17.109.5-9.804 1.934-17.108L90.13 481.044q-11.826-9.261-15.674-23.935-3.848-14.674 4.413-27.5l69.957-124.349q8.261-13.261 22.935-18.456 14.674-5.196 28.5 1.5l90.174 41.304q12.608-10.174 30.782-20.478 18.174-10.304 33.782-15.174l15.435-99.174q2-14.956 13.609-24.217t26.566-9.261h138.782q14.957 0 26.566 9.261 11.609 9.261 13.609 24.217l15.435 98.174q15.608 5.87 34.282 15.674 18.674 9.804 31.413 20.978l89.043-41.304q13.826-6.696 28.783-1.783t22.652 18.739l70.522 123.349q8.261 13.391 4.631 28.565-3.631 15.174-16.457 23.87l-83.174 58.739q1.435 8.304 2.218 18.108.782 9.805.782 18.109 0 8.304-.782 17.609-.783 9.304-2.218 17.608l83.174 59.174q11.826 9.261 15.674 23.935 3.848 14.674-3.848 28.065L810.609 846.74q-7.696 14.391-22.087 19.304-14.392 4.913-28.783-1.782l-89.609-41.87q-13.173 10.739-30.847 21.543-17.674 10.805-34.282 15.674l-15.435 97.043q-2 14.957-13.609 24.218t-26.566 9.261ZM478.87 706q54 0 92-38t38-92q0-54-38-92t-92-38q-54 0-92 38t-38 92q0 54 38 92t92 38Zm0-60q-29.566 0-49.783-20.5Q408.87 605 408.87 576t20.217-49.5Q449.304 506 478.87 506q29 0 49.5 20.5t20.5 49.5q0 29-20.5 49.5t-49.5 20.5Zm1.13-70Zm-39.478 334.913h78.391l14.565-111.435q33.565-8 63.913-25t54.348-42.696l106 46 34.913-64.652-92.87-67.869q4-17.565 6.783-34.631 2.783-17.065 2.783-34.63t-2.283-34.63q-2.283-17.066-7.283-34.631l93.435-67.869-35.478-64.652-105.435 46q-23-27.131-53.13-45.479-30.131-18.348-65.696-22.782l-14-110.87h-78.956l-13.435 110.87q-35.13 6.434-65.761 24.282-30.63 17.848-54.196 43.979l-104.869-46-35.478 64.652 92.304 67.304q-4 17.565-6.782 34.913-2.783 17.348-2.783 34.913 0 17.565 2.783 35.196 2.782 17.63 6.782 34.63l-92.304 67.304 35.478 64.652 104.869-46q24.566 25.131 55.196 42.696 30.631 17.565 64.761 25.565l13.435 110.87Z" />
                <HeaderButton light={true} classes="" svgData="M219.597 909.001q-30.641 0-51.619-20.979-20.979-20.978-20.979-51.619t20.979-51.522Q188.956 764 219.597 764t51.522 20.881Q292 805.762 292 836.403t-20.881 51.619q-20.881 20.979-51.522 20.979Zm260.618 0q-30.476 0-51.454-20.979-20.979-20.978-20.979-51.619t20.764-51.522Q449.309 764 479.785 764q30.476 0 51.454 20.881 20.979 20.881 20.979 51.522t-20.764 51.619q-20.763 20.979-51.239 20.979Zm260.188 0q-30.641 0-51.522-20.979Q668 867.044 668 836.403t20.881-51.522Q709.762 764 740.403 764t51.619 20.881q20.979 20.881 20.979 51.522t-20.979 51.619q-20.978 20.979-51.619 20.979ZM219.597 648.218q-30.641 0-51.619-20.764-20.979-20.763-20.979-51.239 0-30.476 20.979-51.454 20.978-20.979 51.619-20.979t51.522 20.764Q292 545.309 292 575.785q0 30.476-20.881 51.454-20.881 20.979-51.522 20.979Zm260.618 0q-30.476 0-51.454-20.764-20.979-20.763-20.979-51.239 0-30.476 20.764-51.454 20.763-20.979 51.239-20.979 30.476 0 51.454 20.764 20.979 20.763 20.979 51.239 0 30.476-20.764 51.454-20.763 20.979-51.239 20.979Zm260.188 0q-30.641 0-51.522-20.764Q668 606.691 668 576.215q0-30.476 20.881-51.454 20.881-20.979 51.522-20.979t51.619 20.764q20.979 20.763 20.979 51.239 0 30.476-20.979 51.454-20.978 20.979-51.619 20.979ZM219.597 388q-30.641 0-51.619-20.881-20.979-20.881-20.979-51.522t20.979-51.619q20.978-20.979 51.619-20.979t51.522 20.979Q292 284.956 292 315.597t-20.881 51.522Q250.238 388 219.597 388Zm260.618 0q-30.476 0-51.454-20.881-20.979-20.881-20.979-51.522t20.764-51.619q20.763-20.979 51.239-20.979 30.476 0 51.454 20.979 20.979 20.978 20.979 51.619t-20.764 51.522Q510.691 388 480.215 388Zm260.188 0q-30.641 0-51.522-20.881T668 315.597q0-30.641 20.881-51.619 20.881-20.979 51.522-20.979t51.619 20.979q20.979 20.978 20.979 51.619t-20.979 51.522Q771.044 388 740.403 388Z" />
                <ProfilePicture image={profile} />
            </div>
        </div>
    );
};

export default Header;