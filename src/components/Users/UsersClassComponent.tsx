import React, {useEffect} from 'react';
import {UsersPage} from "../../redux/users-reducer";
import s from './Users.module.css'
import {v1} from "uuid";
import axios from "axios";
import userPhoto from '../../assets/images/Sample_User_Icon.png'

export type UsersPropsType = {
    users: UsersPage[]
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersPage[]) => void
}





export class UsersClassComponent extends React.Component<UsersPropsType, UsersPropsType>{

    // constructor(props:UsersPropsType) {
    //     super(props);
    // }


componentDidMount() {
    axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response=>{
            this.props.setUsers(response.data.items)
        })
}

    render() {
    return (
        <div>
            {this.props.users.map(u => {
                    const onClickFollowHandler = () => {
                        console.log('change follower')
                        this.props.follow(u.id)
                    }
                    const onClickUnfollowHandler = () => {
                        this.props.unfollow(u.id)
                    }
                    return (
                        <div key={u.id} className={s.wrapper}>
                <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ?
                            <button onClick={onClickFollowHandler}>Follow</button>
                            :
                            <button onClick={onClickUnfollowHandler}>Unfollow</button>}
                    </div>
                </span>
                            <div className={s.content}>
                    <span >
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                                <span>
                        {/* <div>{u.location.city}</div>*/}
                                    {/*<div>{u.location.country}</div>*/}
                    </span>
                            </div>
                        </div>
                    )

                }
            )}
        </div>
    );
}
}