import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";
import thunk from "redux-thunk";
import {loginReducer} from "./loginReducer";

let rootStore = combineReducers({
    profile: profileReducer,
    dialogs: dialogsReducer,
    usersPage: usersReducer,
    authorization: authReducer,
    loginization: loginReducer,
})

export type rootReducerType = ReturnType<typeof rootStore>


export let store = createStore(rootStore, applyMiddleware(thunk))
//@ts-ignore
window.store = store;

