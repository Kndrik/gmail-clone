const Toast = (props) => {
    return (
        <div className="toast">
            <span className="toastText">{props.text}</span>
            {
                props.canClose ?
                <button onClick={props.clickEvent} className="closeToastButton">X</button>
                :
                null
            }
        </div>
    );
};

export default Toast;