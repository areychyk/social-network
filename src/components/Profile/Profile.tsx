import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/redux-store";


type ProfilePropsType = {
    profile:ProfileType|null
    setUserProfile:(profile:ProfileType)=>void


}

export const Profile = (props: ProfilePropsType) => {

    return (<div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>

            Main content
        </div>

    )
}

