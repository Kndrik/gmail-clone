const ToolButton = (props) => {
    const classes = "toolButton " + props.classes;
    return (
        <li className={classes}>
            <button
                className="toolButtonButton" 
                onClick={props.clickEvent ?
                            props.clickEvent : 
                            (e) => {e.preventDefault()}}
            >
                {
                    props.image ?
                    <div className="toolButtonImageContainer">
                        <img src={props.image} alt="Tool Image" />
                    </div>
                    :
                    <svg className="toolIcon" xmlns="http://www.w3.org/2000/svg" height={props.size ? props.size : 25} viewBox="0 96 960 960" width={props.size ? props.size : 25}>
                        <path 
                            fill="#454746" 
                            d={props.svgData} 
                        />
                    </svg>
                }
                <div className="toolButtonBackground"></div>
            </button>
        </li>
    );
};

export default ToolButton;