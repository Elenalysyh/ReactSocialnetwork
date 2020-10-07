import React from "react";
import { ThunkAction } from "redux-thunk";
import {authThunk} from "./auth-reducer";
import {StateType} from "./redux-store";

const SET_INITIALIZED = "SET_INITIALIZED";

let initialState = {
    initialized: false
}

type initialStateType = typeof initialState

const appReducer = (state=initialState, action: ActionType): initialStateType => {

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
type InitialazedSuccessActionType = {
    type: typeof SET_INITIALIZED
}
type ActionType = InitialazedSuccessActionType

export const initialazedSuccess = (): InitialazedSuccessActionType =>({type: SET_INITIALIZED})

// ThunkCreator

type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionType>
export const initialazedApp = () : ThunkType => {
    return async (dispatch) => {
        await dispatch(authThunk())
        dispatch(initialazedSuccess())
    }
}

export default appReducer

