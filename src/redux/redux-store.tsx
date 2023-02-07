import {combineReducers, createStore} from "redux";
// import {ActionsType, StatePropsTypeInState} from "./store";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    FollowActionType,
    SetCurrentPageActionType, SetTotalUsersCountActionType,
    SetUsersActionType, ToggleIsFetchingActionType,
    UnfollowActionType,
    usersReducer
} from "./users-reducer";

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
    usersPage: usersReducer

});

export type StoreType = ReturnType<typeof reducers>


export let store = createStore(reducers);
// console.log(store)