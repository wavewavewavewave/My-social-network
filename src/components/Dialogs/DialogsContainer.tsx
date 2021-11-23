import React, {ChangeEvent} from "react";
import s from './DIalogs.module.css';
import {MessageItem} from "./Message/Message";
import {DialogItem} from "./DialogsItem/DialogsItem";
import {newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {ActionsTypes, DialogsPageType, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsType = {
    store: StoreType
}

export const DialogsContainer: React.FC<DialogsType> = (props) => {

    let elem = props.store.getState()

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }
    let onChangeSendMessage = (newText: string) => {
        props.store.dispatch(newMessageTextAC(newText))
    }

    return (<Dialogs onChangeSendMessage={onChangeSendMessage}
                     onSendMessageClick={onSendMessageClick}
                     newMessageText={elem.dialogsPage.newMessageText}
                     dialogsPage={elem.dialogsPage}/>);
}


