import {ActionsType, StoreType} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";


let initialState: UsersAuthType = {
    UserId: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}


export const authReducer = (state: UsersAuthType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
                // isAuth: true
            }


        default:
            return state

    }

}

//types
const SET_USER_DATA = 'auth/SET-USER-DATA';


export type SetUserAuthDataActionType = {
    type: 'auth/SET-USER-DATA'
    payload: {
        UserId: number | null
        login: string | null
        email: string | null
        isAuth: boolean
    }
}

export type UsersAuthType = {
    UserId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    isFetching: boolean
}


//Action Create
export const setAuthUserData = (UserId: number | null, login: string | null, email: string | null, isAuth: boolean): SetUserAuthDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        UserId,
        login,
        email,
        isAuth
    }
} as const)


//Thunk
export const getUserData = () => async (dispatch: Dispatch) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}


export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {


    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(response.data.data.userId, email, email, true))

    } else {
        let messageError = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
        const action = stopSubmit('login', {_error: messageError})
        dispatch(action)
    }


}

export const logout = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {

        dispatch(setAuthUserData(null, null, null, false))
    }
}






