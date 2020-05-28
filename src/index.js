import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";

export let rerenderEntireTree = (store) => {

    ReactDOM.render(
        <BrowserRouter>
            <App store={store} />
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)

store.subscribe(()=>{
    rerenderEntireTree(store)
})
