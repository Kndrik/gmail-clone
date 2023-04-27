const EmailFormWindowButton = (props) => {
    return (
        <button onClick={props.clickEvent} className="mailFormWindowButton">
            <svg className="windowButton" xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 96 960 960" width="15">
                <path 
                    fill="#041E49" 
                    d={props.svgData} 
                />
            </svg>
        </button>
    );
};

export default EmailFormWindowButton;