import React, {FC} from 'react';
import {UsersPage} from "../../../redux/users-reducer";
import s from './User.module.css'


import userPhoto from '../../../assets/images/Sample_User_Icon.png'
import {NavLink} from "react-router-dom";


export type UserPropsType = {
    user: UsersPage
    follow: (userID : string) => void
    unfollow: (userID: string) => void
    toggleIsFollowingProgress: (followingInProgress: boolean, userID: string) => void
    followingInProgress: Array<string>


}


export const User: FC<UserPropsType> = ({user, follow, unfollow, followingInProgress,}) => {


    const onClickFollowHandler = (userID: string) => follow(userID)
    const onClickUnfollowHandler = (userID: string) => unfollow(userID)


    return (
        <div key={user.id} className={s.wrapper}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                 className={s.usersPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {user.followed
                            ?
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                onClickUnfollowHandler(user.id)
                            }}>Unfollow</button>

                            :
                            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                onClickFollowHandler(user.id)
                            }}>Follow</button>

                        }
                    </div>
                </span>
            <div className={s.content}>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                <span>
                        {/* <div>{u.location.city}</div>*/}
                    {/*<div>{u.location.country}</div>*/}
                    </span>
            </div>
        </div>
    )

}


