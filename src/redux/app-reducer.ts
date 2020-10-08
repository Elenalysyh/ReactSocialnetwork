import React from "react";
import { ThunkAction } from "redux-thunk";
import {authThunk} from "./auth-reducer";
import {BaseThunkActionType, InferActionsType, StateType} from "./redux-store";

let initialState = {
    initialized: false
}

type initialStateType = typeof initialState

// ActionCreator

export const actions = {
    initialazedSuccess : () =>({type: "SET_INITIALIZED"} as const)
}

type ActionType = InferActionsType<typeof actions>

const appReducer = (state=initialState, action: ActionType): initialStateType => {

    switch (action.type) {
        case "SET_INITIALIZED" :
            return {...state,
                initialized: true
            }
        default :
            return {...state}
    }
}

// ThunkCreator

type ThunkType = BaseThunkActionType<ActionType>

export const initialazedApp = () : ThunkType => {
    return async (dispatch) => {
        await dispatch(authThunk())
        dispatch(actions.initialazedSuccess())
    }
}

export default appReducer

