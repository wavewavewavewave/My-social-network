import axios from "axios";
import {LocationType} from "../redux/usersReducer";


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

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '67d45e9d-f30b-4302-9cf9-75e782587b09'
    },
})


export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
    },
    profileUser(userId: string) {
        return instance.get<ProfileUserType>(`/profile/` + userId)
    },
    unFollowUser(id: number) {
        return instance.delete<FollowAndUnfollowUserType>(`/follow/${id}`)
    },
    followUser(id: number) {
        return instance.post<FollowAndUnfollowUserType>(`/follow/${id}`)
    }
}

export const authApi = {
    profileAuth() {
        return instance.get<ProfileAuthType>(`/auth/me`)
    }
}
/*switchUsers() {
return instance.get(`/profile`)
}*/
