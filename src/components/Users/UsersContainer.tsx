import React from 'react';
import {ActionsType, StoreType} from "../../redux/redux-store";

import {connect} from "react-redux";

// import {Users} from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersPage} from "../../redux/users-reducer";
import {UsersClassComponent} from "./UsersClassComponent";




const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users
    }
}

type mapDispatchToType={
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersPage[]) => void
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

        }
    }
}

// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent);

