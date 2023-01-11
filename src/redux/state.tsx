
export let store:StorePropsType={
    _state:{
        profilePage: {
            post: [
                {id: 1, message: "message1", like: 15},
                {id: 2, message: "message2", like: 20},
                {id: 3, message: "message3", like: 21},

            ],
            newPostText:"123",
        },
        dialogsPage:{
            messageData : [
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
            ]
        },
        sidebar:{}

    },
    _callSubscriber  (state)  {
        console.log('change')
    },
    addPost(){
        let newPost={id: this._state.profilePage.post.length+1, message: this._state.profilePage.newPostText, like: 0};

        this._state.profilePage.post.push(newPost)
        this._state.profilePage.newPostText=''
        this._callSubscriber(this._state)
        console.log("12")
    },
    updateNewPostText (newPostText){

        this._state.profilePage.newPostText= newPostText
        this._callSubscriber(this._state)
    },
    subscribe (observer) {
        this._callSubscriber=observer

    },
    getState(){
        return this._state
    }


}


// let rerenderEntireTree = (state:StatePropsTypeInState) => {
//     console.log('123')
//
// }

export type StorePropsType={
    _state:StatePropsTypeInState,
    _callSubscriber:(state:StatePropsTypeInState)=>void
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void
    subscribe:(observer:(state:StatePropsTypeInState)=>void)=>void
    getState:()=>StatePropsTypeInState
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

export type PropsTypeProfile ={
    post:PostDataType[]
    newPostText:string
}

export type PropsTypeMessage ={
    dialogs:DialogsDataType[]
    messageData:MessageDataType[]
}

export type SidebarType={}

export type StatePropsTypeInState={
    profilePage:PropsTypeProfile
    dialogsPage:PropsTypeMessage
    sidebar:SidebarType

}

export type StatePropsType={

    state:StatePropsTypeInState
    addPost:()=>void
    updateNewPostText:(newPostText:string)=>void

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