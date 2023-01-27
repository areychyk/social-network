import React from 'react';
import {ActionsType, StoreType} from "../../redux/redux-store";

import {connect} from "react-redux";

import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersPage} from "../../redux/users-reducer";




const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsType) => void) => {
    return {
        follow:(userID:string)=>{
            dispatch(followAC(userID))
        },
        unfollow:(userID:string)=>{
            dispatch(unfollowAC(userID))
        },
        setUsers:(users:UsersPage[])=>{
            dispatch(setUsersAC(users))

        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

