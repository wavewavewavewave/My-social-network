import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

let rootStore = combineReducers({
     profile: profileReducer,
     dialogs: dialogsReducer,
     usersPage: usersReducer,
     authorization: authReducer
})

export type rootReducerType = ReturnType<typeof rootStore>


export let store = createStore(rootStore)
//@ts-ignore
window.store = store;

