import React from 'react';

import s from '../Profile/Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostDataType} from "../../App";


export type PostPropsType={
    post:PostDataType[]

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
            <MyPosts post={props.post}/>

            Main contentd
        </div>

    )
}

