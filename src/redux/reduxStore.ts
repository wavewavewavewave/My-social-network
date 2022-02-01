import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";

let rootStore = combineReducers({
     profile: profileReducer,
     dialogs: dialogsReducer,
     usersPage: usersReducer
})

export type rootReducerType = ReturnType<typeof rootStore>

export let store = createStore(rootStore)

