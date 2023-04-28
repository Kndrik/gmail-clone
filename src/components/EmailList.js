import EmailItem from "./EmailItem";
import { v4 as uuidv4 } from "uuid";

const EmailList = (props) => {
    return (
        <div className="emailList">
            {
                props.emails.map((email) => {
                    return (
                        <EmailItem
                            inboxEmail={email.inbox ? email.inbox : false}
                            sender={email.inbox ? email.sender : email.receiver}
                            title={email.title}
                            date={email.date.toDate().toLocaleDateString()}
                            important={email.important ? email.important : false}
                            starred={email.starred ? email.starred : false}
                            unread={
                                !email.inbox ?
                                false :
                                !email.read
                            }
                            id={email.docId}
                            key={uuidv4()} 
                        />
                    );
                })
            }
        </div>
    );
};

export default EmailList;