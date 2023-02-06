import React from 'react';
import {UsersPage} from "../../redux/users-reducer";
import s from './Users.module.css'
import axios from "axios";
import userPhoto from '../../assets/images/Sample_User_Icon.png'

// type UsersPage={
//     id:string
//     followed:boolean
//     photos:{small:string,large:string }
//     name:string
//     status:string
//     location?:{city:string,country:string}
// }


export type UsersPropsType = {
    users: UsersPage[]
    pageSize: number
    totalUsersCount: number
    currentPage:number
    follow: (userID: string) => void
    unfollow: (userID: string) => void
    setUsers: (users: UsersPage[]) => void
    setCurrentPage: (currentPage:number) => void
    setTotalUsersCount: (totalCount:number) => void

}


export class UsersClassComponent extends React.Component<UsersPropsType, UsersPropsType> {

    // constructor(props:UsersPropsType) {
    //     super(props);
    // }


    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)

                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged=(pageNumber:number)=>{
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })


}
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const MinusTenUsers = () => {

        }
        const PlusTenUsers = () => {

        }

        return (
            <div>
                <div className={s.pageUsersBlock}>
                    <button onClick={MinusTenUsers}>-10</button>
                    {pages.map((p, index: number) => {



                        return(
                            <span
                                key={index}
                                className={this.props.currentPage === p ? s.selectedPage : " "}
                                onClick={()=>{this.onPageChanged(p)}}
                            >{p}</span>)})}
                    <button onClick={PlusTenUsers}>+10</button>
                </div>
                {this.props.users.map(u => {
                        const onClickFollowHandler = () => {
                            console.log('change follower')
                            this.props.follow(u.id)
                        }
                        const onClickUnfollowHandler = () => {
                            console.log('change unfollower')
                            this.props.unfollow(u.id)
                        }
                        return (
                            <div key={u.id} className={s.wrapper}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
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
        );
    }
}