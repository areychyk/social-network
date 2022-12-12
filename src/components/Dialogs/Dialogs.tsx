import React from 'react';
import s from '../Dialogs/Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {Dialog} from "./Dialog/Dialog";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <Dialog name="User1" id="1"/>
                <Dialog name="User2" id="2"/>
                <Dialog name="User3" id="3"/>
                <Dialog name="User4" id="4"/>
                <Dialog name="User5" id="5"/>
                <Dialog name="User6" id="6"/>
            </div>
            <div className={s.messages}>
                <Message message='Message 1'/>
                <Message message='Message 2'/>
                <Message message='Message 3'/>
                <Message message='Message 4'/>
                <Message message='Message 5'/>
                <Message message='Message 6'/>
                <Message message='Message 7'/>
            </div>
        </div>
    )
}