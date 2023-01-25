import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
// import {Dialogs} from "./components/Dialogs/Dialogs";

import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {
    ActionsType,
    PropsTypeMessage,
    PropsTypeProfile,
    SidebarType,
    StorePropsType,
    StoreType
} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";



type StatePropsType = {
    // store: StorePropsType
    // state: StoreType
    // dispatch: (action: ActionsType) => void


}


function App(props: StatePropsType) {

    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">

                <Route path={'/profile'} render={() => <Profile
                    // profilePage={props.state.profilePage}
                    // store={props.store}
                    // dispatch={props.dispatch}
                />}/>

                <Route path={'/dialogs'} render={() => <DialogsContainer
                    // store={props.store}
                />}/>

                <Route path={'/news'} render={() => <News/>}/>
                <Route path={'/music'} render={() => <Music/>}/>
                <Route path={'/settings'} render={() => <Settings/>}/>

            </div>

        </div>

    );

}

export default App;
