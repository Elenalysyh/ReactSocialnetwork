import React from "react";
import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";
import dialogReducer from "./dialog-reducer";

let reducers = combineReducers({
        profilePage: profileReducer,
        dialogPage: dialogReducer,
        usersPage: usersReducer,
        auth: authReducer,
        form: formReducer,
        isInitialize: appReducer
    }
)

type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store