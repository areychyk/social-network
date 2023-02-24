import {
    ActionsType,
    AddPostActionType,
    ProfileType,
    PropsTypeProfile,
    UpdateNewPostTextActionType
} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";
import {toggleIsFollowingProgress, unfollowSuccess} from "./users-reducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE='SET-USER-PROFILE';


export type SetUsersProfileActionType = {
    type: 'SET-USER-PROFILE'
    profile:ProfileType|null


}

let initialState: PropsTypeProfile = {
    post: [
        {id: 1, message: "message1", like: 15},
        {id: 2, message: "message2", like: 20},
        {id: 3, message: "message3", like: 21},

    ],
    newPostText: "",
    profile: null
};


export const profileReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.post.length + 1,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: '',
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText : action.newText
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile:action.profile


            }


        default:
            return state

    }


}


//Action Create

export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile:ProfileType): SetUsersProfileActionType => ({
    type: SET_USER_PROFILE,
    profile

})


//Thunk

export const getUser =(userId:string)=>{
    return (dispatch: Dispatch)=> {

        let id = userId
        if (!id) {
            id = '10';
        }

        usersAPI.getUserProfile(id)
            .then(response => {
               dispatch(setUserProfile(response.data))
            })

    }
}