import React from 'react';

import s from '../Header/Header.module.css'
import {NavLink} from "react-router-dom";
import {UsersAuthType} from "../../redux/auth-reducer";




type HeaderPropsType={
    data:UsersAuthType
    logout:()=>void

}
export const Header = (props:HeaderPropsType) => {

    const onClickLogout=()=>{
        props.logout()

    }
    return(<header className={s.header}>
            <img
                src={'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'}/>

            <div className={s.loginBlock}>
                {props.data.isAuth ? <div>{props.data.login}  <button onClick={onClickLogout}>Log out</button></div>:<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    )
}

