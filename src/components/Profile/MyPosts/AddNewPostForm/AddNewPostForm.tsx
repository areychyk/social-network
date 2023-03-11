import React, {KeyboardEvent} from 'react';

import s from './AddNewPostForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";



export type AddPostPropsType = {
    newPost: string


}


export const AddNewPostForm: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Enter your post'
                name='newPost'
                component={'textarea'}
            />
            <div>
                <button>Add post</button>
            </div>
        </form>


    )
}

export const AddNewPostFormRedux = reduxForm<AddPostPropsType>({
    form:'newPost'
})(AddNewPostForm)
