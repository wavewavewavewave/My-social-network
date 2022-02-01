//import {ActionsTypes, StateType} from "./reduxStore";

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    //newPost: string
    profile: null
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
    newPostText: '',
    profile: null,
}

    export const profileReducer = (state= initialState, action: profileReducerType): ProfilePageType  => {
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
        case "SET-USER-PROFILE": {
            return {
                ...state,
                profile: action.profile

            }
        }
        default: return state
    }
}

export type profileReducerType = AddPostActionType | UpdateNewPostTextType | SetUserProfileType

export type AddPostActionType = ReturnType<typeof addPost>
export const addPost = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText
    } as const
}
export type UpdateNewPostTextType = ReturnType<typeof updateNewPostText>
export const updateNewPostText = (newPost: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newPost
    } as const
}
export type SetUserProfileType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: null) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}