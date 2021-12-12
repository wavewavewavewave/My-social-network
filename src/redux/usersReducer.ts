export type LocationType = {
    city: string,
    county: string
}
export type UserType = {
    id: number,
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
            followed: false,
            fullName: 'Daniil Novikov',
            status: 'Hello,dude',
            location: {city: 'Minsk', county: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Karolina Sohar',
            status: 'How are you?',
            location: {city: 'Rechitsa', county: 'Belarus'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Arsenii Nerush',
            status: 'Kotlin, its my life bro!',
            location: {city: 'Moscow', county: 'Russia'}
        },
        {
            id: 4,
            followed: true,
            fullName: 'Roman Pisheiko',
            status: 'Go drink vodka?',
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
export const followAC = (userId: string) => {
    return {
        type: ' FOLLOW',
        userId
    } as const
}
export type UnFollowACType = ReturnType<typeof unFollowAC>
export const unFollowAC = (userId: string) => {
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
