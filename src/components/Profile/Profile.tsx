import React from 'react';

import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../redux/state";



 type PostPropsType={
    post:PostDataType[]
    addPost:()=>void
     newPostText: string
     updateNewPostText:(newPostText: string)=>void


}

export const Profile = (props:PostPropsType) => {

    // let post= [
    //     {id: 1, message: "message1", like: 15},
    //     {id: 2, message: "message2", like: 20},
    //
    // ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts post={props.post}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />

            Main contentd
        </div>

    )
}

