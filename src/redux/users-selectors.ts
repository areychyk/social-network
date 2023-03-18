import {StoreType} from "./redux-store";
import {createSelector} from "reselect";


export const getUsers = (state: StoreType) => {
    return state.usersPage.users
}

//create selector
export const getUsersSelector=createSelector(getUsers,(users)=>{
    return users
})

// export const getUsersSelector=createSelector(getUsers,getIsFetching(users,isFetching)=>{
//     return users
// })

export const getPageSize = (state: StoreType) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state: StoreType) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state: StoreType) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: StoreType) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: StoreType) => {
    return state.usersPage.followingInProgress
}