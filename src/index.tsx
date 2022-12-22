import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from "./redux/state";




ReactDOM.render(
    <App state={state}
        // post={state.post}
        // dialogs={state.dialogs}
        // messageData={state.messageData}
    />,
  document.getElementById('root')
);