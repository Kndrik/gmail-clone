const AnimatedButton = (props) => {
    const classes = "animatedButton " + (props.squared ? " squared " : "") + props.classes;
    return (
        <button  
            className={classes} 
            onClick={props.clickEvent ?
                        props.clickEvent : 
                        (e) => {e.preventDefault()}}
        >
            <div className="animatedButtonContainer">
                {
                    props.text ? 
                        <span className="animatedButtonSpan">{props.text}</span>
                    :
                    <svg className="animatedButtonIcon" xmlns="http://www.w3.org/2000/svg" height={props.size ? props.size : "20"} viewBox="0 96 960 960" width={props.size ? props.size : "20"}>
                        <path 
                            fill="#454746" 
                            d={props.svgData} 
                        />
                    </svg>
                }
                <div className={"animatedButtonBackground" + (props.squared ? " squared" : "")}></div>
            </div>
        </button>
    );
};

export default AnimatedButton;