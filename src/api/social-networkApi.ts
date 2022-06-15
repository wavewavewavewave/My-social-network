import {LocationType} from "../redux/usersReducer";
import axios from "axios";
import {LoginStateType} from "../redux/loginReducer";


type SettingsType = {
    baseURL: string
    withCredentials: boolean,
    headers: HeadersType
}
type HeadersType = {
    'API-KEY': string
}
type GetUsersType = {
    items: UserType[],
    totalCount: number

}
type UserType = {
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
type ProfileUserType = {
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    },
    photos: {
        small: string,
        large: string,
    }
}
type FollowAndUnfollowType = {
    data: {},
    fieldsErrors: [],
    messages: [],
}
type FollowAndUnfollowUserType = {
    data: FollowAndUnfollowType,
    resultCode: number,
}
type ProfileAuthType = {
    resultCode: number
    messages: [],
    data: {
        id: null,
        email: null,
        login: null,
    }
}
export type ResponseLoginType = any
    // resultCode: number,
    // messages: [],
    // data: {
    //     userId: number
    // }

// export type ResponseLoginType = any


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '59ed1c6a-ac50-496f-83e0-e7aa1baa442c'
    },
})


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    unFollowUser(id: number) {
        return instance.delete<FollowAndUnfollowUserType>(`/follow/${id}`)
    },
    followUser(id: number) {
        return instance.post<FollowAndUnfollowUserType>(`/follow/${id}`)
    }
}

export const profileApi = {
    profileUser(userId: string) {
        return instance.get<ProfileUserType>(`/profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`/profile/status/` + userId)
    },
    updateStatus(status: string) {
        return instance.put(`/profile/status/`, {status: status})
    }
}

export const authApi = {
    profileAuth() {
        return instance.get<ProfileAuthType>(`/auth/me`)
    },
    loginUser(data: LoginStateType) {
        return instance.post <LoginStateType, ResponseLoginType>(`/auth/login`, {data: data})
    }
}
