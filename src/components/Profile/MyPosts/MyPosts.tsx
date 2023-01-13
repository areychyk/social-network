import React from 'react';

import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";
import {addPostActionCreator, PostDataType, updateNewPostTextActionCreator} from "../../../redux/state";



type PostPropsType = {
    posts: PostDataType[]
    dispatch: any
    newPostText: string
    // updateNewPostText: (newPostText: string) => void

}



export const MyPosts = (props: PostPropsType) => {

    let postElement = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const AddPost = () => {

        props.dispatch(addPostActionCreator());

        // props.updateNewPostText('')
        // props.updateNewPostText('') занулим в state


    }

    const onPostChange = () => {
        if (newPostElement.current?.value) {
            let text = newPostElement.current.value
            // console.log(text)
            // let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
            let action = updateNewPostTextActionCreator(text)
            props.dispatch(action);
            // props.updateNewPostText(text);

        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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

