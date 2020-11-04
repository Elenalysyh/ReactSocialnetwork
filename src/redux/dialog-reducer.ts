import React from "react";
import {InferActionsType} from "./redux-store";
import exp from "constants";


let initialState = {
    dialogsList : [
        {name: 'Dimych',id: 1},
        {name: 'Sveta',id: 2},
        {name: 'Anton',id: 3},
        {name: 'Some',id: 4}
    ],
    messageList : [
        {message: 'Hello',id: 1},
        {message: 'Yeoo',id: 2},
        {message: 'Yeoo',id: 3},
        {message: 'EY',id: 4}
    ]
}
export const actions = {
    addMessageAC : (dialogText: string) => ({type: "SN/dialog/ADD_MESSAGE", dialogText} as const)
}


const dialogReducer = (state=initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SN/dialog/ADD_MESSAGE" :
            return {...state,
                messageList: [...state.messageList, {id: 6, message: action.dialogText}]

            }
        default:
                return {...state}
    }
}

export type InitialStateType = typeof initialState;
type ActionType = InferActionsType<typeof actions>

export default dialogReducer