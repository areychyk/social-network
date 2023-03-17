import React from 'react';
import './App.css';

import {Navbar} from "./components/Navbar/Navbar";


import {Route, withRouter} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

import {LoginContainer} from "./components/Login/LoginContainer";
import {connect} from "react-redux";

import {compose} from "redux";

import {initializeApp} from "./redux/app-reducer";
import {StoreType} from "./redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


type StatePropsType = {
    initializeApp: () => void
    initialized:boolean

}


class App extends React.Component<StatePropsType> {


    componentDidMount() {

        this.props.initializeApp()

    }

    render() {
        if(!this.props.initialized){

            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>

                    <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>

                    <Route path={'/users'} render={() => <UsersContainer/>}/>

                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/settings'} render={() => <Settings/>}/>
                    <Route path={'/login'} render={() => <LoginContainer/>}/>


                </div>

            </div>

        );

    }
}

const mapStateToProps = (state: StoreType) => ({
       initialized:state.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);



