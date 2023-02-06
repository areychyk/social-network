import React from 'react';
import {ActionsType, StoreType} from "../../redux/redux-store";

import {connect} from "react-redux";


import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPage
} from "../../redux/users-reducer";
import {UsersClassComponent} from "./UsersClassComponent";




const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize:state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
    }
}

type mapDispatchToType={
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersPage[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalCount:number) => void

}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void):mapDispatchToType => {
    return {
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UsersPage[])=>{
            dispatch(setUsersAC(users))

        },
        setCurrentPage:(currentPage:number)=>{
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount:(totalCount:number)=>{
            dispatch(setTotalUsersCountAC(totalCount))
        },

    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

