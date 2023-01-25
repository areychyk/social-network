


import {ActionsType, PostDataType, StorePropsType, StoreType,} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {Dialogs} from "../../Dialogs/Dialogs";
// import {StoreContext} from "../../../StoreContext";



type PostPropsType = {
    // posts: PostDataType[]
    // dispatch: (action: ActionsType) => void
    // newPostText: string

    // store:StorePropsType


}


//lesson 45

// export type PostPropsType = {
//     store:StorePropsType
//
// }

const mapStateToProps = (state:StoreType) => {
    return{
        posts:state.profilePage.post,
        newPostText:state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
    return {
        addPost:()=>{
            dispatch(addPostActionCreator());
        },
        updateNewPostText:(text:string)=>{
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}
export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);




// export const MyPostsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>{(store)=>{
//             let state = store.getState();
//
//             const AddPost = () => {
//                 store.dispatch(addPostActionCreator());
//
//             }
//
//             const onPostChange = (text:string) => {
//                 let action = updateNewPostTextActionCreator(text)
//                 store.dispatch(action);
//
//             }
//             return (
//                 <MyPosts
//                     updateNewPostText={onPostChange}
//                     addPost={AddPost}
//                     posts={state.profilePage.post}
//                     newPostText={state.profilePage.newPostText}/>
//             )
//
//         }}
//
//         </StoreContext.Consumer>
//
//     )
// }



//Lesson 43 store прокидываем через пропсы

// import {ActionsType, PostDataType, StorePropsType,} from "../../../redux/redux-store";
// import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
// import {MyPosts} from "./MyPosts";
// import {StoreContext} from "../../../StoreContext";
//
//
//
// type PostPropsType = {
//     // posts: PostDataType[]
//     // dispatch: (action: ActionsType) => void
//     // newPostText: string
//
//     // store:StorePropsType
//
//
// }

// export const MyPostsContainer = (props: PostPropsType) => {
//     let state = props.store.getState();
//
//     const AddPost = () => {
//         props.store.dispatch(addPostActionCreator());
//
//     }
//
//     const onPostChange = (text:string) => {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(action);
//
//     }
//
//
//     return (
//         <MyPosts
//             updateNewPostText={onPostChange}
//             addPost={AddPost}
//             posts={state.profilePage.post}
//             // newPostText={props.newPostText}
//             newPostText={state.profilePage.newPostText}
//         />
//
//     )
// }
