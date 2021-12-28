import * as url from "url";
import {ActionsTypes} from "./store";


export type LocationType = {
    city: string,
    county: string
}
export type UserType = {
    id: number,
    photos: string
    followed: boolean,
    name: string,
    status: string,
    location: LocationType
}
export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 3,
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}
export type UsersReducerType = FollowACType | UnFollowACType | SetUsersAC | SetCurrentPageAC

export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId
    } as const
}
export type SetUsersAC = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        users
    } as const
}
export type SetCurrentPageAC = ReturnType<typeof setCurrentPageAC>
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    } as const
}
