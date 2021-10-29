import React from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType, MessageType, StateType} from "../../redux/state";

type DialogsType = {
    state: DialogsPageType

}

export function Dialogs({state}:DialogsType) {


    let dialogsElement = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id}/>);
    let messagesElement = state.messages.map(messages => <MessageItem message={messages.message} id={messages.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}
            </div>


            <div className={s.messages}>
                {messagesElement}
                {/*<MessageItem message={messagesData[1].message} id={messagesData[1].id}/>*/}
                {/*<MessageItem message={messagesData[2].message} id={messagesData[2].id} />*/}
            </div>
        </div>

    );
}
