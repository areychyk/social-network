import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
// const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
// const SEND_MESSAGE = 'SEND-MESSAGE'


export let store: StorePropsType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: "message1", like: 15},
                {id: 2, message: "message2", like: 20},
                {id: 3, message: "message3", like: 21},

            ],
            newPostText: "",
        },
        dialogsPage: {
            message: [
                {id: 1, message: "Message 1"},
                {id: 2, message: "Message 2"},
                {id: 3, message: "Message 3"},
                {id: 4, message: "Message 4"},
                {id: 5, message: "Message 5"},
                {id: 6, message: "Message 6"},
                {id: 7, message: "Message 7"},
            ],
            dialogs: [
                {id: 1, name: "User1"},
                {id: 2, name: "User2"},
                {id: 3, name: "User3"},
                {id: 4, name: "User4"},
                {id: 5, name: "User5"},
                {id: 6, name: "User6"},
            ],
            newMessageBody: ''

        },
        sidebar: {}

    },
    _callSubscriber(state) {
        alert('change')
    },

    subscribe(observer) {
        this._callSubscriber = observer

    },
    getState() {
        return this._state
    },

    // addPost(){
    //     let newPost={id: this._state.profilePage.post.length+1, message: this._state.profilePage.newPostText, like: 0};
    //
    //     this._state.profilePage.post.push(newPost)
    //     this._state.profilePage.newPostText=''
    //     this._callSubscriber(this._state)
    //     console.log("12")
    // },

    // updateNewPostText (newPostText){
    //
    //     this._state.profilePage.newPostText= newPostText
    //     this._callSubscriber(this._state)
    // },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state)

    }

}


// export const addPostActionCreator = (): AddPostActionType => ({type: ADD_POST})
// export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => ({
//     type: UPDATE_NEW_POST_TEXT,
//     newText: text
// })

// export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
// export const updateMessageTextActionCreator = (text: string): UpdateNewMessageBodyActionType => ({
//     type: UPDATE_NEW_MESSAGE_BODY,
//     body: text
// })

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType

// UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>
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

export type StorePropsType = {
    _state: StatePropsTypeInState,
    _callSubscriber: (state: StatePropsTypeInState) => void

    subscribe: (observer: (state: StatePropsTypeInState) => void) => void
    getState: () => StatePropsTypeInState

    // addPost:()=>void
    // updateNewPostText:(newPostText:string)=>void

    dispatch: (action: ActionsType) => void

}

export type DialogsDataType = {
    id: number
    name: string
}

export type MessageDataType = {
    id: number
    message: string
}

export type PostDataType = {
    id: number
    message: string
    like: number
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

export type SidebarType = {}

export type StatePropsTypeInState = {
    profilePage: PropsTypeProfile
    dialogsPage: PropsTypeMessage
    sidebar: SidebarType

}

export type StatePropsType = {

    state: StatePropsTypeInState
    addPost: () => void
    updateNewPostText: (newPostText: string) => void

}

// export let state:StatePropsTypeInState={
//     profilePage: {
//         post: [
//             {id: 1, message: "message1", like: 15},
//             {id: 2, message: "message2", like: 20},
//             {id: 3, message: "message3", like: 21},
//
//         ],
//         newPostText:"123",
//     },
//     dialogsPage:{
//         messageData : [
//             {id: 1, message: "Message 1"},
//             {id: 2, message: "Message 2"},
//             {id: 3, message: "Message 3"},
//             {id: 4, message: "Message 4"},
//             {id: 5, message: "Message 5"},
//             {id: 6, message: "Message 6"},
//             {id: 7, message: "Message 7"},
//         ],
//         dialogs: [
//             {id: 1, name: "User1"},
//             {id: 2, name: "User2"},
//             {id: 3, name: "User3"},
//             {id: 4, name: "User4"},
//             {id: 5, name: "User5"},
//             {id: 6, name: "User6"},
//         ]
//     },
//     sidebar:{}
//
// }

// export const AddPost=()=>{
//     const newPost={id: state.profilePage.post.length+1, message: state.profilePage.newPostText, like: 0};
//     state.profilePage.post.push(newPost)
//     state.profilePage.newPostText=''
//     rerenderEntireTree(state)
// }

// export const updateNewPostText=(newPostText:string)=>{
//
//     state.profilePage.newPostText= newPostText
//     rerenderEntireTree(state)
// }

// export const subscribe = (observer:(state:StatePropsTypeInState)=>void) => {
//     rerenderEntireTree=observer
//
// }