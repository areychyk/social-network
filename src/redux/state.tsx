


import {rerenderEntireTree} from "../render";

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
    addPost:(postMessage:string)=>void
}


export let state:StatePropsTypeInState={
    profilePage: {
        post: [
            {id: 1, message: "message1", like: 15},
            {id: 2, message: "message2", like: 20},
            {id: 3, message: "message3", like: 21},

        ],
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

}


export const AddPost=(postMessage:string)=>{
    const newPost={id: state.profilePage.post.length+1, message: postMessage, like: 0};
    state.profilePage.post.push(newPost)
    rerenderEntireTree(state)
}