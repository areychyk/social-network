
import React, {PropsWithChildren} from "react";
import s from './FormControl.module.css'
// import {required} from "src/utils/validators/validator";
import {Field} from "redux-form";



type TextareaPropsType={

}

export const Textarea:React.FC<PropsWithChildren<any> & TextareaPropsType> = (props) => {
const {input, meta:{touched,error}, ...restProps}=props

const hasError = touched && error
    return <div className={s.formControl + ' ' + (hasError? s.error: ' ')}>
      <textarea {...input} {...restProps}/>
        {hasError && <span>{error}</span>}
    </div>

}


type InputPropsType={

}

export const Input:React.FC<PropsWithChildren<any> & InputPropsType> = (props) => {
    const {input, meta, ...restProps}=props

    const hasError = meta.touched && meta.error
    return <div className={s.formControlInput + ' ' + (hasError? s.error: ' ')}>
        <input {...input} {...restProps}/>
        {hasError && <span>{meta.error}</span>}
    </div>

}


// export const createField=(
//     placeholder:string,
//     name:string
// )=><Field  placeholder={placeholder} name={name} component={Input} validate={[required, maxLength]}/>
