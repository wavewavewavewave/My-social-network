//import {ActionsTypes, DialogsType, MessageType} from "./store";

type DialogsType = {
    id: number,
    name: string
}
type MessageType = {
    message: string,
    id: number
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}


let initialState: DialogsPageType = {
    dialogs: [
        {id: 1, name: 'Karolina'},
        {id: 2, name: 'Egor'},
        {id: 3, name: 'Daniil'},
        {id: 4, name: 'Vlad'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Roma'},
    ],
    messages: [
        {id: 1, message: 'Hello, how are you?'},
        {id: 2, message: 'Dude,you really good!'},
        {id: 3, message: 'Maybe go on play football?'},
        {id: 4, message: 'I help you with React'},
        {id: 5, message: 'Youll never walk alone!'},
        {id: 6, message: 'Man,programming is not hard:)'}
    ],
    newMessageText: ""
}


export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReducerType
): DialogsPageType => {
    switch (action.type) {
        case "NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        case "SEND-MESSAGE":
            let newMessageText = state.newMessageText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessageText}],
                newMessageText: ''
            }
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
