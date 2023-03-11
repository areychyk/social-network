import React,{KeyboardEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css'
import { Redirect} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {PropsTypeMessage} from "../../redux/redux-store";
import {AddMessageFormPropsType, AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";



export type PostPropsType = {


    sendMessage: (body: string) => void
    dialogsPage: PropsTypeMessage

    isAuth: boolean
}

export const Dialogs = (props: PostPropsType) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let message = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)


    const addNewMessage = (formData: AddMessageFormPropsType) => {
        console.log(formData.newMessage)
        props.sendMessage(formData.newMessage)
    }




    if (props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>

            <div className={s.messages}>
                <div>{message}</div>
                <div>
                  <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

