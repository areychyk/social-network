import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

export type DialogsDataType = {
    id: number
    name: string
}
export type MessageDataType = {
    id: number
    message: string
}
export type PostDataType = {
    id: number
    message: string
    like: number
}


export type PostPropsType={
    post:PostDataType[]
    dialogs:DialogsDataType[]
    messageData:MessageDataType[]
}




function App(props:PostPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    {/*<Route path={'/profile'} component={Profile}/>*/}
                    {/*<Route path={'/dialogs'} component={Dialogs}/>*/}
                    {/*<Route path={'/news'} component={News}/>*/}
                    {/*<Route path={'/music'} component={Music}/>*/}
                    {/*<Route path={'/settings'} component={Settings}/>*/}

                    <Route path={'/profile'} render={()=><Profile post={props.post}/>}/>
                    <Route path={'/dialogs'} render={()=><Dialogs dialogs={props.dialogs} messageData={props.messageData}/>}/>
                    <Route path={'/news'} render={()=><News/>}/>
                    <Route path={'/music'} render={()=><Music/>}/>
                    <Route path={'/settings'} render={()=><Settings/>}/>

                </div>

            </div>
        </BrowserRouter>
    );

}

export default App;
