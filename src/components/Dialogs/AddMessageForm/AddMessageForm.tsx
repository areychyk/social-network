import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";




export type AddMessageFormPropsType={
    // newMessageBody:string
    // sendMessage: () => void
    // updateNewMessageText:(dody:string)=>void
    message:string


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
    // const onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let body = event.currentTarget.value;
    //     // props.store.dispatch(updateMessageTextActionCreator(body))
    //     props.updateNewMessageText(body);
    //
    // }


    // const onSendMessageClick = () => {
    //
    //     props.sendMessage()
    // }

    return (

                    <form onSubmit={props.handleSubmit}>
                        <Field
                            // value={props.newMessageBody}
                            //
                            // onChange={onNewMessageChange}
                            // onKeyDown={SendMessageKeyDown}
                            placeholder={'Enter your message'}
                            name={'message'}
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

    form: 'message'
})(AddMessageForm)

