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



// export const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
//     headers:     {
//         "API-KEY": "1079"
//     }
// });


// debugger
// axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
//    let data=  response.data
// })

export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if(props.users.length===0){

            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response=>{
                    props.setUsers(response.data.items)
                })
        }
    }





    // props.setUsers([
    //     {id:v1(), followed:false, photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Denis", status:'hello, world', location:{city:"Minsk", country:"Belarus"}},
    //     {id:v1(),followed:true ,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Dmitry", status:'hello, Dmitry', location:{city:"Moscow", country:"Russia"}},
    //     {id:v1(),followed:false,photoURL:"https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png", fullName:"Ivan", status:'hello, Ivan', location:{city:"Kiev", country:"Ukraine"}},
    // ])
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map(u => {
                const onClickFollowHandler = () => {
                    console.log('change follower')
                    props.follow(u.id)
                }
                const onClickUnfollowHandler = () => {
                    props.unfollow(u.id)
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
};

