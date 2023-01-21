import React, {ChangeEvent,KeyboardEvent} from 'react';


import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {StorePropsType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";



export type PostPropsType={
    store:StorePropsType

}

export const DialogsContainer = (props:PostPropsType) => {

let state=props.store.getState().dialogsPage



    const onSendMessageClick = () => {

        props.store.dispatch(sendMessageActionCreator())
    }




    const onNewMessageChange = (body:string) => {

        props.store.dispatch(updateMessageTextActionCreator(body))

    }


    return (
        <Dialogs store={props.store}
                 updateNewMessageText={onNewMessageChange}
                 sendMessage={onSendMessageClick}
                 dialogsPage={state}
        />
    )
}