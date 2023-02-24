import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {PropsTypeMessage, StorePropsType} from "../../redux/redux-store";


export type PostPropsType = {
    // store:StorePropsType
    updateNewMessageText: (body: string) => void
    sendMessage: () => void
    dialogsPage: PropsTypeMessage
    // state:PropsTypeMessage
    // dialogs:DialogsDataType[]
    // messageData:MessageDataType[]
    // dispatch: (action: ActionsType) => void
    isAuth: boolean
}

export const Dialogs = (props: PostPropsType) => {


    let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let message = props.dialogsPage.message.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody = props.dialogsPage.newMessageBody

    const onSendMessageClick = () => {

        props.sendMessage()
    }

    const SendMessageKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter") {
            onSendMessageClick()
        }


    }

    const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value;
        // props.store.dispatch(updateMessageTextActionCreator(body))
        props.updateNewMessageText(body);

    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                <div>{message}</div>
                <div>
                    <div>
                        <textarea
                            value={newMessageBody}
                            placeholder='Enter your message'
                            onChange={onNewMessageChange}
                            onKeyDown={SendMessageKeyDown}
                        ></textarea></div>
                    <div>
                        <button
                            onClick={onSendMessageClick}
                        >Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}