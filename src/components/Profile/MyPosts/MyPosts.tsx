import React from 'react';

import s from '../MyPosts/MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>

    )
}

export default MyPosts;