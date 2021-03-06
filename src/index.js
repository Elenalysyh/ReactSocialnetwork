import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store"
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "react-redux";

    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        ,
        document.getElementById('root')
    );

    window.store = store