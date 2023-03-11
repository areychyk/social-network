import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormControl";
import {maxLengthCreator, required} from "../../../utils/validators/validator";


export type AddMessageFormPropsType = {
    newMessage: string


}
const maxLength = maxLengthCreator(100)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {


    return (

        <form onSubmit={props.handleSubmit}>
            <Field

                placeholder={'Enter your message'}
                name={'newMessage'}
                component={Textarea}
                validate={[required, maxLength]}
            ></Field>
            <div>
                <button

                >Send
                </button>
            </div>
        </form>

    )
}

export const AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({

    form: 'dialogAddMessageForm'
})(AddMessageForm)

