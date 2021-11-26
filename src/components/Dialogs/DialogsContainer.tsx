import React, {} from "react";
import {newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {StoreType} from "../../redux/store";
import {StoreContext} from "../../StoreContext.";
import {Dialogs} from "./Dialogs";

type DialogsType = {}

export const DialogsContainer: React.FC<DialogsType> = () => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC())
                }
                let onChangeSendMessage = (newText: string) => {
                    store.dispatch(newMessageTextAC(newText))
                }
               return <Dialogs onChangeSendMessage={onChangeSendMessage}
                         onSendMessageClick={onSendMessageClick}
                         newMessageText={state.dialogs.newMessageText}
                         dialogsPage={state.dialogs}/>
            }
        }
        </StoreContext.Consumer>
    )
}


