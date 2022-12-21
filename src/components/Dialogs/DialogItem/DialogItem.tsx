import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType={
    name:string
    id:number
}
export const DialogItem =(props:DialogPropsType)=>{
    let path ='/dialogs/'+props.id
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}