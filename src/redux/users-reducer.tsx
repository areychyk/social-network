import {ActionsType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";



export type UsersType = {
    users: UsersPage[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<string>
}

export type UsersPage = {
    id: string
    followed: boolean
    photos: { small: string, large: string }
    name: string
    status: string
    location?: { city: string, country: string }

}


let initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}



export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:

            return {...state, users: state.users.map(m => m.id === action.userID ? ({...m, followed: true}) : m)}

        case UNFOLLOW:
            return {...state, users: state.users.map(m => m.id === action.userID ? ({...m, followed: false}) : m)}

        case SET_USERS:
            return {...state, users: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.followingInProgress
                        ? [...state.followingInProgress, action.userID]
                        : state.followingInProgress.filter(id => id !== action.userID)
            }

        default:
            return state

    }

}

// Variable action type name
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


//Action
export type FollowActionType = { type: 'FOLLOW', userID: string }
export type UnfollowActionType = { type: 'UNFOLLOW', userID: string }
export type SetUsersActionType = { type: 'SET-USERS', users: UsersPage[] }
export type SetCurrentPageActionType = { type: 'SET-CURRENT-PAGE', currentPage: number }
export type SetTotalUsersCountActionType = { type: 'SET-TOTAL-COUNT', totalCount: number }
export type ToggleIsFetchingActionType = { type: 'TOGGLE-IS-FETCHING', isFetching: boolean }
export type ToggleIsFollowingProgressActionType = { type: 'TOGGLE-IS-FOLLOWING-PROGRESS', followingInProgress: boolean,userID:string }


//ActionCreator
export const followSuccess = (userID: string): FollowActionType => ({type: FOLLOW, userID} as const)
export const unfollowSuccess = (userID: string): UnfollowActionType => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: UsersPage[]): SetUsersActionType => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountActionType => ({
    type: SET_TOTAL_COUNT,
    totalCount
} as const)
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)
export const toggleIsFollowingProgress = (followingInProgress: boolean,userID:string): ToggleIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingInProgress,
    userID
} as const)



//Thunk
export const getUsersThunkCreator =(currentPage:number,pageSize:number)=>{
    return (dispatch: Dispatch)=>{
        dispatch( toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch( toggleIsFetching(false))
                dispatch(setUsers(data.items))

                // setTotalUsersCount(data.totalCount)
            })
    }

}

export const follow =(userID:string)=>{
    return (dispatch: Dispatch)=>{
        dispatch(toggleIsFollowingProgress(true,userID))
        usersAPI.getFollow(userID)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode === 0) {

                    dispatch( followSuccess(userID))
                }
                dispatch(toggleIsFollowingProgress(false,userID))
            })

}
}

export const unfollow =(userID:string)=>{
    return (dispatch: Dispatch)=> {
        dispatch(toggleIsFollowingProgress(true, userID))
        usersAPI.getUnfollow(userID)
            .then(response => {

                console.log(response.data)
                if (response.data.resultCode === 0) {

                   dispatch(unfollowSuccess(userID))
                }
                dispatch(toggleIsFollowingProgress(false, userID))
            })
    }
}
