import EmailFormWindowButton from "./EmailFormWindowButton";

import { sendEmail } from "../EmailFetcher";

import { useState, useContext } from "react";

import { auth } from "../AuthManager";
import { Timestamp } from "firebase/firestore";

import { ToastContext } from "../pages/Mails";

const EmailForm = (props) => {
    const [receiver, setReceiver] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [fullScreen, setFullScreen] = useState(false);
    const toast = useContext(ToastContext);

    const handleSubmission = (e) => {
        e.preventDefault();
        if (!receiver || !title) {
            toast("Receiver and title can't be empty.");
            return;
        }

        const email = {
            sender: auth.currentUser.displayName,
            senderEmail: auth.currentUser.email,
            senderPicURL: auth.currentUser.photoURL,
            receiverEmail: receiver,
            title: title,
            content: content,
            date: Timestamp.now()
        }

        toast("Sending the message...", false);
        sendEmail(receiver.toLowerCase().trim(), email).then((result) => {
            toast("Message sent.", true);
            cancelEmail();
        }).catch((error) => {
            toast(error, false);
            console.error("There was an error sending the email", error);
        });
    };

    const cancelEmail = () => {
        props.closeWindow();
        setReceiver('');
        setTitle('');
        setContent('');
    }

    return (
        <div className={"emailFormWindow" + (props.show ? " show" : "") }>
            <div className="emailFormHeader">
                <div className="left">Nouveau message</div>
                <div className="right">
                    <EmailFormWindowButton clickEvent={props.closeWindow} svgData="M230.391 935.609v-79.218h500.218v79.218H230.391Z" />
                    <EmailFormWindowButton clickEvent={() => setFullScreen(!fullScreen)} svgData="M110.391 945.609V626.391h79.218V810.26L714.26 285.609H530.391v-79.218h319.218v319.218h-79.218V341.74L245.74 866.391h183.869v79.218H110.391Z" />
                    <EmailFormWindowButton clickEvent={cancelEmail} svgData="M249 862.566 193.434 807l231-231-231-231L249 289.434l231 231 231-231L766.566 345l-231 231 231 231L711 862.566l-231-231-231 231Z" />
                </div>
            </div>
            <div className="emailFormContent">
                <form 
                    onSubmit={handleSubmission}
                    className="emailForm"
                >
                    <input 
                        type="email" 
                        id="receiver" 
                        placeholder="To" 
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                    />
                    <input 
                        type="text" 
                        id="title" 
                        placeholder="Title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea 
                        id="content" 
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </form>
                <div className="emailFormFooter">
                    <button onClick={handleSubmission} className="sendButton">Envoyer</button>
                </div>
            </div>
        </div>
    );
};

export default EmailForm;