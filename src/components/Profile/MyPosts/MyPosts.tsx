import React from 'react';

import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";

type PostDataType = {
    id: number
    message: string
    like: number
}
export const MyPosts = () => {

    let post: PostDataType[] = [
        {id: 1, message: "message1", like: 15},
        {id: 2, message: "message2", like: 20},

    ]
    let postElement = post.map(p => <Post message={p.message} like={p.like}/>)

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

