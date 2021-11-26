import React, {ChangeEvent, useState} from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/store";

type DialogsType = {
    onChangeSendMessage: (newText: string) => void
    onSendMessageClick: () => void
    newMessageText: string
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsType> = (props) => {
// const [value,setValue] = useState(props.newMessageText)
    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElement = state.messages.map(messages => <MessageItem message={messages.message}
                                                                            id={messages.id}/>)
    // let newMessageText = props.newMessageText

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }
    let onChangeSendMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value
        props.onChangeSendMessage(newText)
        // setValue(newText)

    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>


            <div className={s.messages}>
                <div>{messagesElement}</div>
                <div>
                    <div>
                        <input placeholder={'Message...'}
                               onChange={onChangeSendMessage}
                                  value={props.newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


