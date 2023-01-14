
// import {state, StatePropsTypeInState, subscribe} from "./redux/state";
// import {AddPost, updateNewPostText} from "./redux/state";

import {StatePropsTypeInState, store, StorePropsType} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:StatePropsTypeInState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                dispatch={store.dispatch.bind(store)}

            />,
        </BrowserRouter>,
        document.getElementById('root'));
}




rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)



// <App
// state={state}
// addPost={store.addPost.bind(store)}
// updateNewPostText={store.updateNewPostText.bind(store)}
// />,