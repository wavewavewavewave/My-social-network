import React, {ChangeEvent} from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {
    ActionsTypes,
    DialogsPageType,
    MessageType,
    newMessageTextAC,
    sendMessageAC,
    StateType
} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType
    dispatch: (action: ActionsTypes) => void

}

export const Dialogs: React.FC<DialogsType> = (props) => {
    let dialogsElement = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElement = props.state.messages.map(messages => <MessageItem message={messages.message}
                                                                            id={messages.id}/>)
    let newMessageText = props.state.newMessageText

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
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
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
                {/*<MessageItem message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<MessageItem message={messagesData[2].message} id={messagesData[2].id} />*/}
            </div>
        </div>

    );
}
