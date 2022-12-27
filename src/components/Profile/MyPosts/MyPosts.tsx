import React from 'react';

import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostDataType} from "../../../redux/state";


type PostPropsType = {
    post: PostDataType[]
    addPost: (postMessage: string) => void

}

export const MyPosts = (props: PostPropsType) => {

    let postElement = props.post.map(p => <Post message={p.message} like={p.like}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {
        if(newPostElement.current?.value){
            let text = newPostElement.current?.value
            props.addPost(text);
            newPostElement.current.value = '';
        }

    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={AddPost}>Add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {postElement}
            </div>


        </div>

    )
}

