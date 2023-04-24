const SortBarItem = (props) => {
    const classes = "sortBarItem" + (props.active ? " active" : "");
    return (
        <div className={classes}
            onClick={props.clickEvent}>
            <div className="itemContent">
                <svg className="itemIcon" xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 96 960 960" width="18">
                    <path 
                        fill={props.active ? "#0b57d0" : "#454746" }
                        d={props.svgData} 
                    />
                </svg>
                <span>{props.title}</span>
            </div>
            <div className="decoration"></div>
        </div>
    )
};

export default SortBarItem;