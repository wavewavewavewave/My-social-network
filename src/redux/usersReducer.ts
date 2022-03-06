import {usersApi} from "../api/social-networkApi";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNTER = 'SET_TOTAL_USERS_COUNTER';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type LocationType = {
    city: string,
    county: string,
}
export type UserType = {
    // id: string,
    id: number,
    photos: {
        small: string,
        large: string,
    }
    followed: boolean,
    name: string,
    status: string,
    location: LocationType,
    userPhoto: string,
    error: string,
}
export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    toggleFollowingInProgress: string[],
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    toggleFollowingInProgress: [],
    // followingInProgress: false;
}

export const usersReducer = (state: InitialStateType = initialState, action: UsersReducerType): InitialStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNTER :
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                toggleFollowingInProgress: action.isFetching ?
                    [...state.toggleFollowingInProgress.filter(id => id !== action.userId)]
                    : state.toggleFollowingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}
export type UsersReducerType = FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCounterACType
    | SetToggleIsFetchingACType
    | ToggleFollowingInProgressType

export type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId
    } as const
}
export type UnFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId,
    } as const
}
export type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS',
        users,
    } as const
}
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage,
    } as const
}
export type SetTotalUsersCounterACType = ReturnType<typeof setTotalUsersCounter>
export const setTotalUsersCounter = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USERS_COUNTER',
        totalUsersCount,
    } as const
}
export type SetToggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE_IS_FETCHING",
        isFetching,
    } as const
}
export type ToggleFollowingInProgressType = ReturnType<typeof toggleFollowingInProgress>
export const toggleFollowingInProgress = (isFetching: boolean, userId: string) => {
    return {
        type: "TOGGLE_IS_FOLLOWING_PROGRESS",
        isFetching,
        userId,
    } as const
}

export const getUsersTC = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersReducerType>) => {
        dispatch(setToggleIsFetching(true))
        usersApi.getUsers(currentPage, pageSize).then(res => {
            dispatch(setToggleIsFetching(false))
            dispatch(setUsers(res.data.items))
            dispatch(setTotalUsersCounter(res.data.totalCount))
        });
    }
}

export const unFollowUserTC = (id: number) => {
    return (dispatch: Dispatch<UsersReducerType>) => {
        dispatch(toggleFollowingInProgress(true, String(id)))
        usersApi.unFollowUser(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(unFollow(id))
                }
                dispatch(toggleFollowingInProgress(false, String(id)))
            })
    }
}
export const followUserTC = (id: number) => {
    return (dispatch: Dispatch<UsersReducerType>) => {
        dispatch(toggleFollowingInProgress(true, String(id)))
        usersApi.followUser(id)
            .then(res => {
                if (res.data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingInProgress(false, String(id)))
            })
    }
}
