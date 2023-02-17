import React from 'react';
import {UsersPage} from "../../redux/users-reducer";
import s from './Users.module.css'

import userPhoto from '../../assets/images/Sample_User_Icon.png'
import {NavLink} from "react-router-dom";

import {usersAPI} from "../../api/api";


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


    // let pagesCount = 15;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const MinusTenUsers = () => {
        props.setTotalUsersCount(props.totalUsersCount - 25)
    }

    const PlusTenUsers = () => {
        props.setTotalUsersCount(props.totalUsersCount + 25)

    }

    const onClickFollowHandler = (userID: string) => {

        props.toggleIsFollowingProgress(true,userID)
        usersAPI.getFollow(userID)
            .then(response => {
                console.log(response.data)
                if (response.data.resultCode === 0) {

                    props.follow(userID)
                }
                props.toggleIsFollowingProgress(false,userID)
            })


    }

    const onClickUnfollowHandler = (userID: string) => {
        props.toggleIsFollowingProgress(true,userID)
        usersAPI.getUnfollow(userID)
            .then(response => {

                console.log(response.data)
                if (response.data.resultCode === 0) {

                    props.unfollow(userID)
                }
                props.toggleIsFollowingProgress(false,userID)
            })


    }

    return (<div>
            <div className={s.pageUsersBlock}>
                {props.totalUsersCount > 50 && <button onClick={MinusTenUsers}>-5</button>}


                {pages.map((p, index: number) => {

                    return (
                        <span
                            key={index}
                            className={props.currentPage === p ? s.selectedPage : " "}
                            onClick={() => {
                                props.onPageChanged(p)
                            }}
                        >{p}</span>)
                })}

                <button onClick={PlusTenUsers}>+5</button>
            </div>
            {props.users.map(u => {

                    return (
                        <div key={u.id} className={s.wrapper}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                        </NavLink>

                    </div>
                    <div>
                        {u.followed
                            ?
                            <button disabled={props.followingInProgress.some(id=>id ===u.id)} onClick={() => {
                                onClickUnfollowHandler(u.id)
                            }}>Unfollow</button>

                            :
                            <button disabled={props.followingInProgress.some(id=>id ===u.id)} onClick={() => {
                                onClickFollowHandler(u.id)
                            }}>Follow</button>

                        }
                    </div>
                </span>
                            <div className={s.content}>
                    <span>
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


    )
}


// export class UsersAPIClassComponent extends React.Component<UsersPropsType, UsersPropsType> {
//
//     // constructor(props:UsersPropsType) {
//     //     super(props);
//     // }
//
//
//     componentDidMount() {
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//
//                 this.props.setTotalUsersCount(response.data.totalCount)
//             })
//     }
//
//     onPageChanged=(pageNumber:number)=>{
//         this.props.setCurrentPage(pageNumber);
//         axios
//             .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
//             .then(response => {
//                 this.props.setUsers(response.data.items)
//             })
//
//
// }
//     render() {
//
//         // let pagesCount = 15;
//         // // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
//         //
//         // let pages = []
//         // for (let i = 1; i <= pagesCount; i++) {
//         //     pages.push(i)
//         // }
//         //
//         // const MinusTenUsers = () => {
//         //
//         // }
//         //
//         // const PlusTenUsers = () => {
//         //
//         // }
//
//
//         return (
//             // <div>
//             //     <div className={s.pageUsersBlock}>
//             //         <button onClick={MinusTenUsers}>-10</button>
//             //
//             //         {pages.map((p, index: number) => {
//             //
//             //             return(
//             //                 <span
//             //                     key={index}
//             //                     className={this.props.currentPage === p ? s.selectedPage : " "}
//             //                     onClick={()=>{this.onPageChanged(p)}}
//             //                 >{p}</span>)})}
//             //
//             //         <button onClick={PlusTenUsers}>+10</button>
//             //     </div>
//             //     {this.props.users.map(u => {
//             //             const onClickFollowHandler = () => {
//             //                 console.log('change follower')
//             //                 this.props.follow(u.id)
//             //             }
//             //             const onClickUnfollowHandler = () => {
//             //                 console.log('change unfollower')
//             //                 this.props.unfollow(u.id)
//             //             }
//             //             return (
//             //                 <div key={u.id} className={s.wrapper}>
//             //     <span>
//             //         <div>
//             //             <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
//             //         </div>
//             //         <div>
//             //             {u.followed
//             //                 ?
//             //                 <button onClick={onClickFollowHandler}>Follow</button>
//             //                 :
//             //                 <button onClick={onClickUnfollowHandler}>Unfollow</button>}
//             //         </div>
//             //     </span>
//             //                     <div className={s.content}>
//             //         <span>
//             //             <div>{u.name}</div>
//             //             <div>{u.status}</div>
//             //         </span>
//             //                         <span>
//             //             {/* <div>{u.location.city}</div>*/}
//             //                             {/*<div>{u.location.country}</div>*/}
//             //         </span>
//             //                     </div>
//             //                 </div>
//             //             )
//             //
//             //         }
//             //     )}
//             // </div>
//         );
//     }
// }