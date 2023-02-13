import {ActionsType} from "./redux-store";


export type UsersAuthType = {
    UserId: number | null
    login: string | null
    email: string | null
    isAuth:boolean
    isFetching: boolean
}


let initialState: UsersAuthType = {
    UserId: null,
    login: null,
    email: null,
    isAuth:false,
    isFetching: false
}


export const authReducer = (state: UsersAuthType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.data,
                isAuth:true
            }


        default:
            return state

    }

}


const SET_USER_DATA = 'SET-USER-DATA';


export type SetUserAuthDataActionType = {
    type: 'SET-USER-DATA'
    data: {
        UserId: number | null
        login: string | null
        email: string | null
    }
}


export const setAuthUserData = (UserId: number, login: string, email: string): SetUserAuthDataActionType => ({
    type: SET_USER_DATA,
    data: {
        UserId,
        login,
        email
    }
} as const)





