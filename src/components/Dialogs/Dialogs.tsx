import React, {ChangeEvent} from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {ActionsTypes, DialogsPageType} from "../../redux/store";

type DialogsType = {
    store: DialogsPageType
    dispatch: (action: ActionsTypes) => void

}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElement = props.store.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElement = props.store.messages.map(messages => <MessageItem message={messages.message}
                                                                            id={messages.id}/>)
    let newMessageText = props.store.newMessageText

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let onChangeSendMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value
        props.dispatch(newMessageTextAC(newText))
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
                                  value={newMessageText}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}


