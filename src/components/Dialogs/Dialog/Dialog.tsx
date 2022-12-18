import s from "./Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogPropsType={
    name:string
    id:number
}
export const Dialog =(props:DialogPropsType)=>{
    return(
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/'+props.id}>{props.name}</NavLink>
        </div>
    )
}