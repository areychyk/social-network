import React from 'react';

import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PropsTypeProfile} from "../../redux/state";


type PostPropsType = {
    profilePage: PropsTypeProfile
    dispatch: any


}

export const Profile = (props: PostPropsType) => {

    // let post= [
    //     {id: 1, message: "message1", like: 15},
    //     {id: 2, message: "message2", like: 20},
    //
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.post}
                     dispatch={props.dispatch}
                     newPostText={props.profilePage.newPostText}
                     // updateNewPostText={props.updateNewPostText}
            />

            Main contentd
        </div>

    )
}

