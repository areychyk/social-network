import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";




export type AddMessageFormPropsType={
    // newMessageBody:string
    // sendMessage: () => void
    // updateNewMessageText:(dody:string)=>void
    newMessage:string


}

export const AddMessageForm:React.FC<InjectedFormProps<AddMessageFormPropsType>> = (props) => {
    // const SendMessageKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (event.key === "Enter") {
    //        onSendMessageClick()
    //     }
    //
    //
    // }
    //





    return (

                    <form onSubmit={props.handleSubmit}>
                        <Field

                            placeholder={'Enter your message'}
                            name={'newMessage'}
                            component={'textarea'}
                        ></Field>
                        <div>
                            <button
                                // onClick={onSendMessageClick}
                            >Send
                            </button>
                        </div>
                    </form>

    )
}

export const  AddMessageFormRedux = reduxForm<AddMessageFormPropsType>({

    form: 'dialogAddMessageForm'
})(AddMessageForm)

