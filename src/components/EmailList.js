import EmailItem from "./EmailItem";
import { v4 as uuidv4 } from "uuid";

const EmailList = (props) => {
    return (
        <div className="emailList">
            {
                props.emails.map((email) => {
                    return (
                        <EmailItem
                            sender={email.sender}
                            title={email.title}
                            date={email.date}
                            important={email.important}
                            starred={email.starred}
                            unread={!email.read}
                            key={uuidv4()} 
                        />
                    );
                })
            }
        </div>
    );
};

export default EmailList;