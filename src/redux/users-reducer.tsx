import {ActionsType} from "./redux-store";
import {v1} from "uuid";

export type UsersType={
    users:UsersPage[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

export type UsersPage={
    id:string
    followed:boolean
    photos:{small:string,large:string }
    name:string
    status:string
    location?:{city:string,country:string}
}



let initialState:UsersType ={
    users:[],
    pageSize:5,
    totalUsersCount:20,
    currentPage:5
}

    // [
    // {id:v1(), followed:false, photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Denis", status:'hello, world', location:{city:"Minsk", country:"Belarus"}},
    //     {id:v1(),followed:true ,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Dmitry", status:'hello, Dmitry', location:{city:"Moscow", country:"Russia"}},
    //     {id:v1(),followed:false,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Ivan", status:'hello, Ivan', location:{city:"Kiev", country:"Ukraine"}},
    // ]

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:

            return {    ...state, users: state.users.map(m=>m.id===action.userID ? ({...m, followed:false}) : m)   }

        case UNFOLLOW:
            return  {    ...state, users: state.users.map(m=>m.id===action.userID ? ({...m, followed:true}) : m)   }

        case SET_USERS:
            return  {...state,users: action.users}

        case SET_CURRENT_PAGE:
            return  {...state, currentPage:action.currentPage}

        case SET_TOTAL_COUNT:
            return  {...state, totalUsersCount:action.totalCount}


        default:
            return state

    }

}


const FOLLOW='FOLLOW';
const UNFOLLOW='UNFOLLOW';
const SET_USERS='SET-USERS';
const SET_CURRENT_PAGE='SET-CURRENT-PAGE';
const SET_TOTAL_COUNT='SET-TOTAL-COUNT';

export type FollowActionType={type: 'FOLLOW',userID:string}
export type UnfollowActionType={type: 'UNFOLLOW',userID:string}
export type SetUsersActionType={type: 'SET-USERS', users:UsersPage[]}
export type SetCurrentPageActionType={type: 'SET-CURRENT-PAGE', currentPage:number}
export type SetTotalUsersCountActionType={type: 'SET-TOTAL-COUNT', totalCount:number}

export const followAC = (userID:string): FollowActionType => ({type: FOLLOW, userID} as const)
export const unfollowAC = (userID:string): UnfollowActionType => ({type: UNFOLLOW, userID} as const)
export const setUsersAC = (users:UsersPage[]): SetUsersActionType => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage:number): SetCurrentPageActionType => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCountAC = (totalCount:number): SetTotalUsersCountActionType => ({type: SET_TOTAL_COUNT, totalCount} as const)




// [
//     {id:v1(), followed:false, photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Denis", status:'hello, world', location:{city:"Minsk", country:"Belarus"}},
//     {id:v1(),followed:true ,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Dmitry", status:'hello, Dmitry', location:{city:"Moscow", country:"Russia"}},
//     {id:v1(),followed:false,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Ivan", status:'hello, Ivan', location:{city:"Kiev", country:"Ukraine"}},
// ]