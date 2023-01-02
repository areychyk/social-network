
import {state, StatePropsTypeInState, subscribe} from "./redux/state";

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


const rerenderEntireTree = (state:StatePropsTypeInState) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={AddPost}
                updateNewPostText={updateNewPostText}
            />,
        </BrowserRouter>,
        document.getElementById('root'));
}




rerenderEntireTree(state)

subscribe(rerenderEntireTree)
