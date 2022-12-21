import React from 'react';

import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../App";


export type PostPropsType={
    post:PostDataType[]

}

export const MyPosts = (props:PostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} like={p.like}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>


        </div>

    )
}

