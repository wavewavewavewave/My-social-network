import React, {} from "react";
import {newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import { StoreType} from "../../redux/store";
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


