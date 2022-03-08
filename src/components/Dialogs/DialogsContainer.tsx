import React, {} from "react";
import {DialogsPageType, newMessageTextAC, sendMessageAC} from "../../redux/dialogsReducer";
import {Dialogs, DialogsType} from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import {compose, Dispatch} from "redux";
import {AuthRedirect} from "../../hoc/AuthRedirect";

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    newMessageText: string,
    isAuth: boolean,
}
type MapDispatchToPropsType = {
    onSendMessageClick: () => void,
    onChangeSendMessage: (newText: string) => void,
}

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogs,
        newMessageText: state.dialogs.newMessageText,
        isAuth: state.authorization.isAuth,
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

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    AuthRedirect
)(Dialogs)

// let AuthRedirectComponent = AuthRedirect(Dialogs)
//     (props: DialogsType) => {
//     if (props.isAuth === false) {
//         return <Redirect to={'/login'}/>
//     }
//     return <Dialogs {...props}/>
// }

// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

