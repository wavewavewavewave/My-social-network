import {ProfileType} from "../components/Content/ContentConteiner";
import {Dispatch} from "redux";
import {profileApi} from "../api/social-networkApi";

export type ProfilePageType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: {
        photos: {
            small: string,
            large: string
        }
    },
    status: string,
}
export type PostsType = {
    id: number,
    message: string,
    likesCount: number,
}

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'HI, I learn JS/TS in IT-INCUBATOR, follow me', likesCount: 5},
        {id: 2, message: 'I on Tuesday, yep', likesCount: 10},
        {id: 3, message: 'Learning programming is so hard(', likesCount: 12}
    ],
    newPostText: '',
    profile: {photos: {small: '', large: ''}},
    status: ""
}

export const profileReducer = (state = initialState, action: profileReducerType): ProfilePageType => {
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
        case "SET-STATUS-PROFILE": {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}

export type profileReducerType = AddPostActionType
    | UpdateNewPostTextType
    | SetUserProfileType
    | SetStatusProfileType

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
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        profile
    } as const
}
export type SetStatusProfileType = ReturnType<typeof setStatusProfile>
export const setStatusProfile = (status: string) => {
    return {
        type: "SET-STATUS-PROFILE",
        status,
    } as const
}


export const profileUserTC = (userId: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileApi.profileUser(userId).then(res => {
            dispatch(setUserProfile(res.data))
        })

    }
}
export const setStatusProfileTC = (userId: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileApi.getStatus(userId).then(res => {
            dispatch(setStatusProfile(res.data))
        })
    }
}
export const updateStatusProfileTC = (status: string) => {
    return (dispatch: Dispatch<profileReducerType>) => {
        profileApi.updateStatus(status)
            .then(res => {
                if (res.data.resultCode === 0)
                dispatch(setStatusProfile(res.data.status))
            })
    }
}

