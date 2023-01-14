import {ActionsType, PropsTypeMessage, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const sendMessageActionCreator = (): SendMessageActionType => ({type: SEND_MESSAGE})
export const updateMessageTextActionCreator = (text: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})

export const dialogsReducer = (state: PropsTypeMessage, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            let newMessage = {id: state.message.length+1, message: body};
            state.message.push(newMessage)
            state.newMessageBody = ''
            return state
        default:
            return state
    }


    return state
}