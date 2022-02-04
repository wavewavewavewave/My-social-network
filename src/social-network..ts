import axios from "axios";


export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '911248f0-1866-498d-84bc-ce9553ace487'

    }
})