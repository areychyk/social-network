import React from 'react';
import {StoreType} from "redux/redux-store";

import {connect} from "react-redux";


import {
    follow,
    getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    toggleIsFollowingProgress,
    unfollow,
    UsersPage
} from "redux/users-reducer";


import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSelector
} from "redux/users-selectors";


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


// const mapStateToProps = (state: StoreType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress:state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: StoreType) => {
    return {
        users: getUsersSelector(state),
        // users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress:getFollowingInProgress(state),
    }
}



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

})
)(UsersAPIClassComponent)
