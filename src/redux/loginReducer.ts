import {Dispatch} from "redux";
import {authApi} from "../api/social-networkApi";
import {profileAuthTC} from "./authReducer";

export const initialState: LoginStateType = {
    email: "",
    password: "",
    rememberMe: false
}

export type LoginStateType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: boolean,
}


export const loginReducer = (state: LoginStateType = initialState, action: LoginReducersActionType): LoginStateType => {
    switch (action.type) {
        case 'login/USER-LOGIN':
            return {...state, ...action.user}

        default:
            return state
    }
}

export type SetUserLoginACType = ReturnType<typeof userLoginAC>
export const userLoginAC = (user: LoginStateType) => ({
    type: 'login/USER-LOGIN',
    user,
})


export type LoginReducersActionType = SetUserLoginACType

export const userLoginTC = (data: LoginStateType) => (dispatch: Dispatch<LoginReducersActionType>) => {
    authApi.loginUser(data)
        .then(res => {
            if(res.data.resultCode === 0) {
                dispatch(userLoginAC(res.data))
                // dispatch(profileAuthTC())
            }

        })
}