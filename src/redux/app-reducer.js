import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {authThunk} from "./auth-reducer";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}

const appReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED :
                return {...state,
                    initialized: true
                    }
            default :
                return {...state}
        }
}
 // ActionCreator
export const initialazedSuccess = ()=>({type: SET_INITIALIZED})

// ThunkCreator

export const initialazedApp = () => {
    return (dispatch) => {
        dispatch(authThunk()).then(() => {
            dispatch(initialazedSuccess())
        })
    }
}

export default appReducer

