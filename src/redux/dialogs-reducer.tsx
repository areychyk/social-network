import {ActionsType, PropsTypeMessage, SendMessageActionType} from "./redux-store";


const SEND_MESSAGE = 'SEND-MESSAGE';



let initialState={
        message: [
            {id: 1, message: "Message 1"},
            {id: 2, message: "Message 2"},
            {id: 3, message: "Message 3"},
            {id: 4, message: "Message 4"},
            {id: 5, message: "Message 5"},
            {id: 6, message: "Message 6"},
            {id: 7, message: "Message 7"},
        ],
        dialogs: [
            {id: 1, name: "User1"},
            {id: 2, name: "User2"},
            {id: 3, name: "User3"},
            {id: 4, name: "User4"},
            {id: 5, name: "User5"},
            {id: 6, name: "User6"},
        ],


    };

export const dialogsReducer = (state: PropsTypeMessage=initialState, action: ActionsType) => {

    switch (action.type) {




        case SEND_MESSAGE:
            let newMessage = {id: state.message.length+1, message: action.newMessage};
            return{
                ...state,
                message:[...state.message, newMessage],

            }



        default:
            return state
    }


    return state
}

export const sendMessageActionCreator = (newMessage:string): SendMessageActionType => ({type: SEND_MESSAGE, newMessage} as const)
