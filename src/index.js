import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

export let rerenderEntireTree = (store) => {

    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );
}


rerenderEntireTree(store)

store.subscribe(()=>{
    rerenderEntireTree(store)
})
