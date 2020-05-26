import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {addPost, onChangeMyPost} from "./redux/state"
import {BrowserRouter} from "react-router-dom";
import {rerenderEntireTree} from "./rerender";


rerenderEntireTree(state)
