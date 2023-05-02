const MailViewButton = (props) => {
    return (
        <button className="mailViewButton">
            <svg className="mailViewButtonIcon" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 96 960 960" width="20">
                <path 
                    fill="#444746" 
                    d={props.svgData} 
                />
            </svg>
            <span>{props.text}</span>
        </button>
    );
};

export default MailViewButton;