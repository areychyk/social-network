
// import {state, StatePropsTypeInState, subscribe} from "./redux/state";
// import {AddPost, updateNewPostText} from "./redux/state";

// import {StatePropsTypeInState, store, StorePropsType} from "./redux/store";




import {store, StoreType} from "./redux/redux-store";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:StoreType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                store={store}
                // dispatch={store.dispatch.bind(store)}

            />,
        </BrowserRouter>,
        document.getElementById('root'));
}




rerenderEntireTree(store.getState())

store.subscribe(()=>{
    let state=store.getState();
    rerenderEntireTree(state)
})



// <App
// state={state}
// addPost={store.addPost.bind(store)}
// updateNewPostText={store.updateNewPostText.bind(store)}
// />,