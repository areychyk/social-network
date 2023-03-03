import React, {FormEventHandler} from 'react';
import s from './LoginForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";





export type FormDataType={
    login:string
    password:string
    rememberMe:boolean
}



const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'login'} name={'login'} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div>
                <Field type="checkbox"  name={'rememberMe'} component={'input'}/> remember me
            </div>
            <div>
                <button>login</button>
            </div>

        </form>

    )

}


export const LoginReduxForm = reduxForm<FormDataType>({

    form: 'login'
})(LoginForm)