import {Dispatch} from "redux";
import {authApi} from "../api/social-networkApi";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


export type InitialStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: boolean,
    isAuth: boolean,
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
}

export const authReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true,
            }
        }
        case "TOGGLE-IS-FETCHING" :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
export type UsersReducerType = SetUserDataType
    | SetToggleIsFetchingACType


type SetUserDataType = ReturnType<typeof setAuthUserData>
export const setAuthUserData = (id: null, email: null, login: null, isAuth: false) => {
    return {
        type: SET_AUTH_USER_DATA,
        data: {
            id,
            email,
            login,
            isAuth,
        }
    } as const
}

export type SetToggleIsFetchingACType = ReturnType<typeof setToggleIsFetchingAC>
export const setToggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching,
    } as const
}

export const profileAuthTC = () => {
    return (dispatch: Dispatch<UsersReducerType>) => {
        authApi.profileAuth()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    dispatch(setAuthUserData(id, email, login, false))
                }
            })
    }
}