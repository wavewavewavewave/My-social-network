import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

let rootStore = combineReducers({
     profile: profileReducer,
     dialogs: dialogsReducer
})

export type rootReducerType = ReturnType<typeof rootStore>

export let store = createStore(rootStore)
