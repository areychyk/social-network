import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators/validator";
import s from './LoginForm.module.css'





export type FormDataType={
    email:string
    password:string
    rememberMe:boolean
}

const maxLength = maxLengthCreator(20)

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit,error}) => {


    return (

        <form onSubmit={handleSubmit}>
            <div>
                <Field  placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength]}/>
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required, maxLength]} type={'password'}/>
            </div>
            <div>
                <Field type="checkbox"  name={'rememberMe'} component={Input} /> remember me
            </div>
            {error && <div className={s.formSummaryError}>{error}</div>}

            <div>
                <button>login</button>
            </div>

        </form>

    )

}


export const  LoginReduxForm = reduxForm<FormDataType>({

    form: 'login'
})(LoginForm)