import React from 'react';

// import s from '../Profile/Profile.module.css'
// import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, PropsTypeProfile, StorePropsType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


type PostPropsType = {
    // profilePage: PropsTypeProfile
    // dispatch: (action: ActionsType) => void
    store: StorePropsType


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
            <MyPostsContainer
                // posts={props.profilePage.post}
                // dispatch={props.dispatch}
                store={props.store}
                // newPostText={props.profilePage.newPostText}
                // updateNewPostText={props.updateNewPostText}
            />

            Main content
        </div>

    )
}

