


import {ActionsType, PostDataType, StorePropsType,} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";



type PostPropsType = {
    // posts: PostDataType[]
    // dispatch: (action: ActionsType) => void
    store:StorePropsType
    // newPostText: string


}



export const MyPostsContainer = (props: PostPropsType) => {
    let state = props.store.getState();

    const AddPost = () => {
        props.store.dispatch(addPostActionCreator());

    }

    const onPostChange = (text:string) => {
            let action = updateNewPostTextActionCreator(text)
            props.store.dispatch(action);

        }


    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={AddPost}
            posts={state.profilePage.post}
            // newPostText={props.newPostText}
            newPostText={state.profilePage.newPostText}
        />

    )
}

