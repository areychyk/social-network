import React, {ChangeEvent,KeyboardEvent} from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    ActionsType,
    DialogsDataType,
    MessageDataType,
    PropsTypeMessage,
    StorePropsType,

} from "../../redux/state";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";



export type PostPropsType={
    store:StorePropsType
    // state:PropsTypeMessage
    // dialogs:DialogsDataType[]
    // messageData:MessageDataType[]
    // dispatch: (action: ActionsType) => void
}

export const Dialogs = (props:PostPropsType) => {

let state=props.store.getState().dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let message = state.message.map(m => <Message key={m.id} message={m.message}/>)
    let newMessageBody=state.newMessageBody

    const onSendMessageClick = () => {

        props.store.dispatch(sendMessageActionCreator())
    }

    const SendMessageKeyDown = (event:KeyboardEvent<HTMLTextAreaElement>) => {
    if(event.key === "Enter"){
        onSendMessageClick()
    }


    }

    const onNewMessageChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        let body = event.currentTarget.value;
        props.store.dispatch(updateMessageTextActionCreator(body))

    }


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
                    <div><button
                        onClick={onSendMessageClick}
                    >Send</button></div>
                </div>
            </div>
        </div>
    )
}