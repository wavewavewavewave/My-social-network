import React, {} from "react";
import {DialogsPageType, newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    newMessageText: string
}
type MapDispatchToPropsType = {
    onSendMessageClick: () => void
    onChangeSendMessage: (newText: string) => void
}

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogs,
        newMessageText: state.dialogs.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageAC())
        },
        onChangeSendMessage: (newText: string) => {
            dispatch(newMessageTextAC(newText))
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

