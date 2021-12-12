import * as url from "url";


export type LocationType = {
    city: string,
    county: string
}
export type UserType = {
    id: number,
    userPhotoUrl: string
    followed: boolean,
    fullName: string,
    status: string,
    location: LocationType
}
export type InitialStateType = {
    users: Array<UserType>
}

let initialState: InitialStateType = {
    users: [
        {
            id: 1,
            userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
            followed: false,
            fullName: 'Daniil Novikov',
            status: 'Hello,dude, go 1 katochku dlya nastroeniya',
            location: {city: 'Minsk', county: 'Belarus'}
        },
        {
            id: 2,
            userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
            followed: true,
            fullName: 'Polkovnik Sobko',
            status: 'How are you?',
            location: {city: 'Donbas', county: 'DNR'}
        },
        {
            id: 3,
            userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
            followed: false,
            fullName: 'Arsenii Nerush',
            status: 'Kotlin, its my life bro!',
            location: {city: 'Moscow', county: 'Russia'}
        },
        {
            id: 4,
            userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
            followed: true,
            fullName: 'Roman Pisheiko',
            status: 'Go drink vodka',
            location: {city: 'Gomel', county: 'Belarus'}
        }
    ]
}

export const usersReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
                users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)
            }
        case "SET-USERS":
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}

//{...state, users: [...state.users, action.users]}

export type UsersReducerType = FollowACType | UnFollowACType | SetUsersAC

export type FollowACType = ReturnType<typeof followAC>
export const followAC = (userId: number) => {
    return {
        type: ' FOLLOW',
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
