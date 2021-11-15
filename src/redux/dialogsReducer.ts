import {ActionsTypes, DialogsPageType, PostsType} from "./state";


export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
     switch (action.type) {
         case "NEW-MESSAGE-TEXT": {
            return state.newMessageText = action.newText
         }
         case "SEND-MESSAGE": {
             return
             let newText = state.newMessageText
             state.messages.push({id: 6, message: newText})
             state.newMessageText = ''
         }
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