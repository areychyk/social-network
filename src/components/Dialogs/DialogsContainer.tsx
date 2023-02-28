import React, {ChangeEvent, KeyboardEvent} from 'react';
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {ActionsType, StorePropsType, StoreType} from "../../redux/redux-store";
import {Dialogs, PostPropsType} from "./Dialogs";
import {connect} from "react-redux";
import {WithAuthRedirectComponent} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";



const mapStateToProps = (state:StoreType) => {
    return{
        dialogsPage:state.dialogsPage,

    }
}

const mapDispatchToProps = (dispatch:(action: ActionsType) => void) => {
return {
    updateNewMessageText:(body:string)=>{
        dispatch(updateMessageTextActionCreator(body))
    },
    sendMessage:()=>{
        dispatch(sendMessageActionCreator())
    }
}
}
// let AuthRedirectComponent = (props:PostPropsType)=>{
//     if (!props.isAuth) return <Redirect to={'/login'}/>
//     return (
//         <Dialogs {...props} />
//     )
// }

// export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);



// export const DialogsContainer = WithAuthRedirectComponent(connect(mapStateToProps,mapDispatchToProps)(Dialogs));

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    WithAuthRedirectComponent
)
(Dialogs)




















//lesson 43 store прокидываем через пропсы
// import React, {ChangeEvent,KeyboardEvent} from 'react';
//
//
// import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../redux/dialogs-reducer";
// import {StorePropsType} from "../../redux/redux-store";
// import {Dialogs} from "./Dialogs";

// export type PostPropsType={
//     store:StorePropsType
//
// }
//
// export const DialogsContainer = (props:PostPropsType) => {
//
//     let state=props.store.getState().dialogsPage
//
//
//
//     const onSendMessageClick = () => {
//
//         props.store.dispatch(sendMessageActionCreator())
//     }
//
//
//
//
//     const onNewMessageChange = (body:string) => {
//
//         props.store.dispatch(updateMessageTextActionCreator(body))
//
//     }
//
//
//     return (
//         <Dialogs store={props.store}
//                  updateNewMessageText={onNewMessageChange}
//                  sendMessage={onSendMessageClick}
//                  dialogsPage={state}
//         />
//     )
// }



// import {StoreContext} from "../../StoreContext";

//StoreContext
// export type PostPropsType = {
//     // store:StorePropsType
//
// }
//
// export const DialogsContainer = () => {
//
//
//     return (
//         <StoreContext.Consumer>{(store) => {
//             let state = store.getState().dialogsPage
//
//
//             const onSendMessageClick = () => {
//
//                 store.dispatch(sendMessageActionCreator())
//             }
//
//
//             const onNewMessageChange = (body: string) => {
//
//                 store.dispatch(updateMessageTextActionCreator(body))
//
//             }
//
//             return (
//                 <Dialogs store={store}
//                          updateNewMessageText={onNewMessageChange}
//                          sendMessage={onSendMessageClick}
//                          dialogsPage={state}
//                 />
//             )
//
//         }}</StoreContext.Consumer>
//
//     )
// }

//lesson 45

// export type PostPropsType = {
//     store:StorePropsType
//
// }
