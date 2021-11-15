import {ActionsTypes, DialogsPageType, PostsType} from "./store";
import {stat} from "fs";


export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
    switch (action.type) {
        case "NEW-MESSAGE-TEXT": {
            state.newMessageText = action.newText
            return state;
        }
        case "SEND-MESSAGE":
            let newText = state.newMessageText
            state.messages.push({id: 6, message: newText})
            state.newMessageText = ''
            return state
        default:
            return state
    }
}

export type dialogsReducerType = NewMessageTextACType | SendMessageACType

export type NewMessageTextACType = ReturnType<typeof newMessageTextAC>
export const newMessageTextAC = (newText: string) => {
    return {
        type: "NEW-MESSAGE-TEXT",
        newText
    } as const
}
export type SendMessageACType = ReturnType<typeof sendMessageAC>
export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}