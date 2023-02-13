import React from 'react';

import s from '../Header/Header.module.css'
import {NavLink} from "react-router-dom";
import {UsersAuthType} from "../../redux/auth-reducer";



type HeaderPropsType={
    data:UsersAuthType
    setAuthUserData:(id: number, login: string, email: string)=>void
}
export const Header = (props:HeaderPropsType) => {
    return(<header className={s.header}>
            <img
                src={'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'}/>

            <div className={s.loginBlock}>
                {props.data.isAuth ? props.data.login:<NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>

    )
}

