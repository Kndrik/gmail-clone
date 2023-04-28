import EmailItem from "./EmailItem";
import { v4 as uuidv4 } from "uuid";

const EmailList = (props) => {
    return (
        <div className="emailList">
            {
                props.emails.map((email) => {
                    return (
                        <EmailItem
                            sender={email.sender || email.receiver}
                            title={email.title}
                            date={email.date.toDate().toLocaleDateString()}
                            important={email.important}
                            starred={email.starred}
                            unread={
                                email.receiver ?
                                false :
                                !email.read
                            }
                            key={uuidv4()} 
                        />
                    );
                })
            }
        </div>
    );
};

export default EmailList;