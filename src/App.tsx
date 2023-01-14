import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {ActionsType, PropsTypeMessage, PropsTypeProfile, SidebarType, StorePropsType} from "./redux/state";


// export type DialogsDataType = {
//     id: number
//     name: string
// }
// export type MessageDataType = {
//     id: number
//     message: string
// }
// export type PostDataType = {
//     id: number
//     message: string
//     like: number
// }
//
//
// export type PropsTypeProfile ={
//     post:PostDataType[]
// }
// export type PropsTypeMessage ={
//     dialogs:DialogsDataType[]
//     messageData:MessageDataType[]
// }
//
// type StatePropsTypeInState={
//     profilePage:PropsTypeProfile
//     dialogsPage:PropsTypeMessage
//
// }
//
//
//
// type StatePropsType={
//
//    state:StatePropsTypeInState
// }
export type StatePropsTypeInState = {
    profilePage: PropsTypeProfile
    dialogsPage: PropsTypeMessage
    sidebar: SidebarType

}

type StatePropsType = {
    store:StorePropsType
    state: StatePropsTypeInState
    dispatch: (action: ActionsType) => void


}


function App(props: StatePropsType) {

    return (
        // <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                {/*<Route path={'/profile'} component={Profile}/>*/}
                {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                {/*<Route path={'/news'} component={News}/>*/}
                {/*<Route path={'/music'} component={Music}/>*/}
                {/*<Route path={'/settings'} component={Settings}/>*/}

                <Route path={'/profile'} render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                    // newPostText={props.state.profilePage.newPostText}

                />}/>
                <Route path={'/dialogs'} render={() => <Dialogs
                    store={props.store}
                    // state={props.state.dialogsPage}
                    // dispatch={props.dispatch}
                    // messageData={props.state.dialogsPage.message}
                />}/>
                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>

        </div>
        // </BrowserRouter>
    );

}

export default App;
