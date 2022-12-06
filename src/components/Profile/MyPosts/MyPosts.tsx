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
            <Post message={'message1'} like={15}/>
            <Post message={'message2'} like={20}/>



        </div>

    )
}

export default MyPosts;