import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";

type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    message: string
}

export const Dialogs = () => {

    let dialogs:DialogsDataType[] = [
        {id: 1, name: "User1"},
        {id: 2, name: "User2"},
        {id: 3, name: "User3"},
        {id: 4, name: "User4"},
        {id: 5, name: "User5"},
        {id: 6, name: "User6"},
    ]

    let messageData:MessageDataType[] = [
        {id: 1, message: "Message 1"},
        {id: 2, message: "Message 2"},
        {id: 3, message: "Message 3"},
        {id: 4, message: "Message 4"},
        {id: 5, message: "Message 5"},
        {id: 6, message: "Message 6"},
    ]


    let dialogsElement = dialogs.map(d => <Dialog name={d.name} id={d.id}/>)

    let message = messageData.map(m => <Message message={m.message}/>)


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