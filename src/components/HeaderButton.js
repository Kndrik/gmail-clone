const HeaderButton = (props) => {
    const classes = "headerButton " + props.classes + (props.light ? '' : ' dark');
    return (
        <button 
            type={props.type} 
            className={classes} 
            onClick={props.clickEvent ?
                        props.clickEvent : 
                        (e) => {e.preventDefault()}}
        >
            <svg className="headerIcon" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25">
                <path 
                    fill={props.light ? "#606367" : "#454746"} 
                    d={props.svgData} 
                />
            </svg>
        </button>
    );
};

export default HeaderButton;