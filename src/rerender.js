import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, onChangeMyPost} from "./redux/state"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
            <BrowserRouter>
                <App state={state} addPost={addPost} onChangeMyPost={onChangeMyPost}/>
            </BrowserRouter>
        ,
        document.getElementById('root')
    );
}

