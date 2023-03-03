import React from 'react';
import s from './Login.module.css'
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";


export const Login = () => {


    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div className={s.wrapperLogin}>
            <h1>Login</h1>
            <div className={s.loginForm}>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>

            <div>
                <h3>Тестовые Email и Password</h3>

                <div>
                    <span>Email: free@samuraijs.com</span>
                </div>
                <div>
                    <span>Password: free</span>
                </div>
            </div>

        </div>

    )

}