import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/state"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (store) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} addPost={store.addPost.bind(store)} onChangeMyPost={store.onChangeMyPost.bind(store)}/>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)

store.subscribe(rerenderEntireTree)
