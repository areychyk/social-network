import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "redux/redux-store";
import s from './Profile.module.css'


type ProfilePropsType = {
    profile?:ProfileType
    status:string
    updateUserStatus:(status:string)=>void
    isOwner:boolean
    savePhoto:(file:File)=>void



}

export const Profile = (props: ProfilePropsType) => {

    return (<div className={s.profileBlock}>
            <ProfileInfo
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus}
                savePhoto={props.savePhoto}
            />
            <MyPostsContainer/>

            Main content
        </div>

    )
}

