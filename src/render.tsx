import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {AddPost, StatePropsTypeInState} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree=(state:StatePropsTypeInState)=> {
    ReactDOM.render(<BrowserRouter>
        <App state={state} addPost={AddPost}/>,
    </BrowserRouter>, document.getElementById('root'));
}