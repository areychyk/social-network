import React from 'react';
import {ActionsType, StoreType} from "../../redux/redux-store";

import {connect} from "react-redux";


import {
    follow,
    followSuccess, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching, toggleIsFollowingProgress, unfollow,
    unfollowSuccess,
    UsersPage
} from "../../redux/users-reducer";



import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";
import {compose, Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";



export type UsersPropsType = {
    users: UsersPage[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: UsersPage[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    isFetching: boolean
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingProgress:(followingInProgress:boolean, userID:string)=>void
    followingInProgress:Array<string>
    getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
    follow:(userId:string)=>void
    unfollow:(userId:string)=>void

}


export class UsersAPIClassComponent extends React.Component<UsersPropsType, UsersPropsType> {


    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching(true)
        //
        //
        // usersAPI.getUsers(pageNumber, this.props.pageSize)
        //     .then(data => {
        //         this.props.toggleIsFetching(false)
        //         this.props.setUsers(data.items)
        //     })

    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                setTotalUsersCount={this.props.setTotalUsersCount}
                toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}


const mapStateToProps = (state: StoreType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress:state.usersPage.followingInProgress,
    }
}

// type mapDispatchToType = {
//
//     setUsers: (users: UsersPage[]) => void
//     setCurrentPage: (currentPage: number) => void
//     setTotalUsersCount: (totalCount: number) => void
//     toggleIsFetching: (isFetching: boolean) => void
//     toggleIsFollowingProgress:(followingInProgress:boolean,userID:string)=>void
//     getUsersThunkCreator:(currentPage:number,pageSize:number)=>void
//
//
// }
//
// const mapDispatchToProps = (dispatch:AppDispatch): mapDispatchToType=> {
//     return {
//
//         setUsers: (users: UsersPage[]) => {
//             dispatch(setUsers(users))
//
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPage(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCount(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetching(isFetching))
//         },
//         toggleIsFollowingProgress:(followingInProgress: boolean,userID:string)=>{
//             dispatch(toggleIsFollowingProgress(followingInProgress,userID))
//         },
//         getUsersThunkCreator:(currentPage:number,pageSize:number)=>{
//             dispatch(getUsersThunkCreator(currentPage,pageSize))
//         }
//
//     }
// }
//
//
// export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIClassComponent);

// export const UsersContainer = connect(mapStateToProps, {
//     setUsers,
//     setCurrentPage,
//     setTotalUsersCount,
//     toggleIsFetching,
//     toggleIsFollowingProgress,
//     getUsersThunkCreator,
//     follow,
//     unfollow
//
// })(UsersAPIClassComponent);

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowingProgress,
    getUsersThunkCreator,
    follow,
    unfollow

}),
    WithAuthRedirectComponent
)(UsersAPIClassComponent)
