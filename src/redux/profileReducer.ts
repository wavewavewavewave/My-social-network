import {ActionsTypes, StateType} from "./store";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'HI, I learn JS/TS in IT-INCUBATOR, follow me', likesCount: 5},
        {id: 2, message: 'I on Tuesday, yep', likesCount: 10},
        {id: 3, message: 'Learning programming is so hard(', likesCount: 12}
    ],
    newPostText: ''
}

    export const profileReducer = (state= initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newPost
            }
        }
        default: return state
    }
}

export type profileReducerType = AddPostActionACType | UpdateNewPostTextACType

export type AddPostActionACType = ReturnType<typeof addPostAC>
export const addPostAC = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export type UpdateNewPostTextACType = ReturnType<typeof updateNewPostTextAC>
export const updateNewPostTextAC = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPost
    } as const
}