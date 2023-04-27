const AnimatedButtonEmailItem = (props) => {
    return (
        <button  
            className={"animatedButton email " + (props.classes ? props.classes : "")}
            onClick={props.clickEvent ?
                        props.clickEvent : 
                        (e) => {e.preventDefault()}}
        >
            <div className="animatedButtonContainer">
                <svg className="animatedButtonIcon" xmlns="http://www.w3.org/2000/svg" height={props.size ? props.size : "20"} viewBox="0 96 960 960" width={props.size ? props.size : "20"}>
                    <path 
                        d={props.svgData} 
                    />
                </svg>
                <div className="animatedButtonBackground email"></div>
            </div>
        </button>
    );
};

export default AnimatedButtonEmailItem;