import {ActionsType, AddPostActionType, PropsTypeProfile, UpdateNewPostTextActionType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState={
        post: [
            {id: 1, message: "message1", like: 15},
            {id: 2, message: "message2", like: 20},
            {id: 3, message: "message3", like: 21},

        ],
        newPostText: "",
    };


export const profileReducer = (state: PropsTypeProfile=initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.post.length + 1,
                message: state.newPostText,
                like: 0
            };

            state.post.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state

    }


}


export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})