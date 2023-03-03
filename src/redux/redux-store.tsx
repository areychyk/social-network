import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from "redux-thunk";

import {profileReducer, SetUsersProfileActionType, SetUsersStatusActionType} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    FollowActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType, ToggleIsFollowingProgressActionType,
    UnfollowActionType,
    usersReducer
} from "./users-reducer";
import {authReducer, SetUserAuthDataActionType} from "./auth-reducer";

import { reducer as formReducer } from 'redux-form'

export type StorePropsType = {
    subscribe: (observer: (state: StoreType) => void) => void
    getState: () => StoreType
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | UnfollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetTotalUsersCountActionType
    | ToggleIsFetchingActionType
    | SetUsersProfileActionType
    | SetUserAuthDataActionType
    | ToggleIsFollowingProgressActionType
    | SetUsersStatusActionType


export type AddPostActionType = {
    type: 'ADD-POST'

}
export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string

}
export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string

}
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type PropsTypeProfile = {
    post: PostDataType[]
    newPostText: string
    profile: null | ProfileType
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: symbol
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type PropsTypeMessage = {
    dialogs: DialogsDataType[]
    message: MessageDataType[]
    newMessageBody: string

}

export type PostDataType = {
    id: number
    message: string
    like: number
}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}

export type SidebarType = {}

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,


});

export type StoreType = ReturnType<typeof reducers>
// export type RootStateType = StoreType
// export type AppDispatch = ThunkDispatch<RootStateType, ActionsType, any>


export let store = createStore(reducers, applyMiddleware(thunkMiddleware));
// console.log(store)

// @ts-ignore
window.store = store