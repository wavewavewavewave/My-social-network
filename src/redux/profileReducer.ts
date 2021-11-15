import {ActionsTypes, PostsType, ProfilePageType, StateType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsTypes):ProfilePageType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost);
            state.newPostText = ''
            return state
        case "UPDATE-NEW-POST-TEXT": {
             state.newPostText = action.newPost
            return state
        }
        default: return state
    }
}

// export type profileReducerType = AddPostActionACType | updateNewPostTextACType
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