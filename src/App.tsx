import React from 'react';
import './App.css';
import {Navbar} from "components/Navbar/Navbar";
import { HashRouter, Route, withRouter} from "react-router-dom";
import {News} from "components/News/News";
import {Music} from "components/Music/Music";
import {Settings} from "components/Settings/Settings";
import {DialogsContainer} from "components/Dialogs/DialogsContainer";

// const DialogsContainer = React.lazy(() => import('components/Dialogs/DialogsContainer').then((value)=>({
//     default:value.DialogsContainer
// })));
// const DialogsContainer = React.lazy(async () => ({ default: (await import('components/Dialogs/DialogsContainer')).DialogsContainer }))
// const DialogsContainer = React.lazy(() =>
//     import('components/Dialogs/DialogsContainer')
//         .then(({ DialogsContainer }) => ({ default: DialogsContainer })),
// );
// const DialogsContainer = React.lazy(() => import("components/Dialogs/DialogsContainer").then((value) => ({default: value.DialogsContainer})));

import {UsersContainer} from "components/Users/UsersContainer";
import {ProfileContainer} from "components/Profile/ProfileContainer";
import {HeaderContainer} from "components/Header/HeaderContainer";
import {LoginContainer} from "components/Login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "redux/app-reducer";
import {store, StoreType} from "redux/redux-store";
import {Preloader} from "components/common/preloader/Preloader";


type StatePropsType = {
    initializeApp: () => void
    initialized: boolean

}


class App extends React.Component<StatePropsType> {


    componentDidMount() {

        this.props.initializeApp()

    }

    render() {
        if (!this.props.initialized) {

            return <Preloader/>
        }

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">

                    <Route path={'/profile/:userID?'} render={() => <ProfileContainer/>}/>

                    <Route path={'/dialogs'} render={() => {
                        return(
                            <React.Suspense fallback={<Preloader />}>
                                <DialogsContainer/>
                            </React.Suspense>

                        )

                    }}/>

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
    initialized: state.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);


export const MainApp = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
