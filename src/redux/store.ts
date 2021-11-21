import {observe} from "web-vitals/dist/modules/lib/observe"
import {profileReducer, profileReducerType} from "./profileReducer";
import {dialogsReducer, dialogsReducerType} from "./dialogsReducer";

export type MessageType = {
    message: string
    id: number

}
export type DialogsType = {
    id: number
    name: string
}
export type PostsType =  {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageText: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType
    _addPost: () => void
    _updateNewPostText: (newPost: string) => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    _rerenderEntireTree: () => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = profileReducerType | dialogsReducerType

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'HI, I learn JS/TS in IT-INCUBATOR, follow me', likesCount: 5},
                {id: 2, message: 'I on Tuesday, yep', likesCount: 10},
                {id: 3, message: 'Learning programming is so hard(', likesCount: 12}
            ],
            newPostText: ''

        },
        dialogsPage: {
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
        },
    },
    _rerenderEntireTree() {
        console.log('HiHi')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._rerenderEntireTree = observer;
    },
    _addPost() {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._rerenderEntireTree()
    },
    _updateNewPostText(newPost: string) {
        this._state.profilePage.newPostText = newPost
        this._rerenderEntireTree()
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action)
        dialogsReducer(this._state.dialogsPage, action)
        this._rerenderEntireTree()
    }
}

export default store
