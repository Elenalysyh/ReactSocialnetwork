import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = () => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)

store.subscribe(()=>{
    rerenderEntireTree(store)
})
