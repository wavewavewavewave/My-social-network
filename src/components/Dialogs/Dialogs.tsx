import React, {ChangeEvent} from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {ActionsTypes, DialogsPageType, StateType, StoreType} from "../../redux/store";

type DialogsType = {
    onChangeSendMessage: (newText: string) => void
    onSendMessageClick: () => void
    newMessageText: string
    dialogsPage: DialogsPageType
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElement = state.messages.map(messages => <MessageItem message={messages.message}
                                                                            id={messages.id}/>)
    let newMessageText = props.newMessageText

    let onSendMessageClick = () => {
        onSendMessageClick()
    }
    let onChangeSendMessage = (e: ChangeEvent<HTMLInputElement>) => {
        let newText = e.currentTarget.value
        props.onChangeSendMessage(newText)
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


