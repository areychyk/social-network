import axios from "axios";

// const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';
// const config = {
//     withCredentials:true,
//     headers: {
//         "API-KEY":"944413f4-5eb4-4767-a66d-dd54b12c9aac"
//
//     }}
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "b45e6fbf-0e93-4502-a0b4-aff308e92526"

    }
})


export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getFollow(userID:string){

        return instance.post(`follow/${userID}`)

    },

    getUnfollow(userID:string){

        return instance.delete(`follow/${userID}`,{})

    },

    getAuthMe(){

        return instance.get(`auth/me`)

    },

    getUserProfile(userID:string){
        return instance.get(`profile/${userID}`)

    }



}

