import React, {KeyboardEvent} from 'react';

import s from '../MyPosts/MyPosts.module.css'

import { PostDataType, } from "../../../redux/redux-store";
import {AddNewPostFormRedux,  AddPostPropsType} from "./AddNewPostForm/AddNewPostForm";
import {Post} from "./Post/Post";



type PostPropsType = {
    posts: PostDataType[]
    addPost:(newPostText:string)=>void


}



export const MyPosts = (props: PostPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)


const addNewPost = (formData:AddPostPropsType) => {
    console.log(formData.newPost)
    props.addPost(formData.newPost)
}



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>

               <AddNewPostFormRedux onSubmit={addNewPost}/>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>


        </div>

    )
}

