import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsDataType, MessageDataType} from "../../App";


export type PostPropsType={

    dialogs:DialogsDataType[]
    messageData:MessageDataType[]
}

export const Dialogs = (props:PostPropsType) => {

    // let dialogs= [
    //     {id: 1, name: "User1"},
    //     {id: 2, name: "User2"},
    //     {id: 3, name: "User3"},
    //     {id: 4, name: "User4"},
    //     {id: 5, name: "User5"},
    //     {id: 6, name: "User6"},
    // ]
    //
    // let messageData = [
    //     {id: 1, message: "Message 1"},
    //     {id: 2, message: "Message 2"},
    //     {id: 3, message: "Message 3"},
    //     {id: 4, message: "Message 4"},
    //     {id: 5, message: "Message 5"},
    //     {id: 6, message: "Message 6"},
    // ]


    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)

    let message = props.messageData.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}