import React, {KeyboardEvent} from 'react';

import s from './AddNewPostForm.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { maxLengthCreator, required} from "../../../../utils/validators/validator";
import {Textarea} from "../../../common/FormsControl/FormControl";



export type AddPostPropsType = {
    newPost: string


}


const maxLength = maxLengthCreator(10)

export const AddNewPostForm: React.FC<InjectedFormProps<AddPostPropsType>> = (props) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Enter your post'
                name='newPost'
                component={Textarea}
                validate={[required, maxLength]}
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
