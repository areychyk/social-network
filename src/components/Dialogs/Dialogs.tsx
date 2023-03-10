import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {PropsTypeMessage, StorePropsType} from "../../redux/redux-store";
import {AddMessageFormPropsType, AddMessageFormRedux} from "./AddMessageForm/AddMessageForm";
import {FormDataType} from "../Login/LoginForm/LoginForm";


export type PostPropsType = {

    updateNewMessageText: (body: string) => void
    sendMessage: () => void
    dialogsPage: PropsTypeMessage

    isAuth: boolean
}

export const Dialogs = (props: PostPropsType) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let message = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    const onSubmit = (formData: AddMessageFormPropsType) => {
        console.log(formData)
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
                  <AddMessageFormRedux
                      onSubmit={onSubmit}
                      // newMessageBody={newMessageBody}
                      // updateNewMessageText={props.updateNewMessageText}
                      // sendMessage={props.sendMessage}
                  />

                </div>
            </div>
        </div>
    )
}

