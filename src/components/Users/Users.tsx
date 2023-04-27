import React from 'react';
import {UsersPage} from "redux/users-reducer";
import {Paginator} from "../common/paginator/Paginator";
import {User} from "../Users/User/User";


export type UsersPropsType = {
    users: UsersPage[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    onPageChanged: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userID:string) => void
    followingInProgress: Array<string>


}


export const Users = (props: UsersPropsType) => {

    return (<div>
            <Paginator
                pageSize={props.pageSize}
                // setTotalUsersCount={props.setTotalUsersCount}
                totalItemsCount={props.totalUsersCount}
                currentPage={props.currentPage}
                onPageChanged={props.onPageChanged}
                portionSize={10}

            />
            {props.users.map(u => <User
                key={u.id}
                user={u}
                follow={props.follow}
                unfollow={props.unfollow}
                toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                followingInProgress={props.followingInProgress}
                />
            )}
        </div>


    )
}
