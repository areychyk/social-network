import axios from "axios";
import {ProfileType} from "../redux/redux-store";
import {UsersPage} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b45e6fbf-0e93-4502-a0b4-aff308e92526"

    }
})

export type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: number

}

type AuthUserType = {
    id: number
    login: string
    email: string
}

export type UsersResponseType = {
    error: null | string
    items: UsersPage[]
    totalCount: number

}

// export type UserResponseType = {
//     id: string
//     followed: boolean
//     photos: { small: null | string, large: null | string }
//     name: string
//     status: string
//     location?: { city: string, country: string }
// }




export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<UsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(userID: string) {

        return instance.post<ResponseType>(`follow/${userID}`)

    },
    getUnfollow(userID: string) {

        return instance.delete<ResponseType>(`follow/${userID}`)

    },


}

export const profileAPI = {

    getProfile(userID: string) {
        return instance.get<ProfileType>(`profile/${userID}`)

    },
    getStatus(userID: string) {
        return instance.get<any>(`profile/status/${userID}`)

    },
    updateStatus(status: string  ) {
        return instance.put<ResponseType>(`profile/status/`,{status:status})

    }

}


export const authAPI = {
    me() {
        return instance.get<ResponseType<AuthUserType>>(`auth/me`)
    }
}

