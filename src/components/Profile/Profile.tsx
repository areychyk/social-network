import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "redux/redux-store";
import s from './Profile.module.css'


type ProfilePropsType = {
    profile:ProfileType|null
    status:string
    updateUserStatus:(status:string)=>void



}

export const Profile = (props: ProfilePropsType) => {

    return (<div className={s.profileBlock}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
            />
            <MyPostsContainer/>

            Main content
        </div>

    )
}

