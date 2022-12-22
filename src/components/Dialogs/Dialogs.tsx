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