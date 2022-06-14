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


export const loginReducer = (state: LoginStateType = initialState, action: LoginReducersActionType) => {
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

export const userLoginTC = () => () => {

}