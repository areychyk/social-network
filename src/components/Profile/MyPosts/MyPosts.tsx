import React, {KeyboardEvent} from 'react';

import s from '../MyPosts/MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, PostDataType, } from "../../../redux/store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



type PostPropsType = {
    posts: PostDataType[]
    dispatch: (action: ActionsType) => void
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

    const AddPostKeyDown = (event:KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            AddPost()
        }
    }


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                              placeholder='Enter your post'
                              onKeyDown={AddPostKeyDown}
                    />
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

