import React from 'react';
import s from './Login.module.css'
import {FormDataType, LoginReduxForm} from "./LoginForm/LoginForm";
import {Redirect} from "react-router-dom";


type LoginPropsType = {
    login: (email:string, password:string, rememberMe:boolean) => void
    isAuth:boolean
}


export const Login = (props: LoginPropsType) => {


    const onSubmit = (formData: FormDataType) => {
        const {email, password, rememberMe}=formData
        console.log(formData)
        props.login(email,password,rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
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


