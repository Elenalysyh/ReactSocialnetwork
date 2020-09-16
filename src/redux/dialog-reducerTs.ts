import React from "react";
const ONCHANGE_MESSAGE_TEXT = "ONCHANGE_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE"

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
const dialogReducerTs = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            return {...state,
                messageList: [...state.messageList, {id: 6, message: action.dialogText}]

            }
        default:
                return {...state}
    }
}


export let onChangeMessageTextAC = (text) =>({type: ONCHANGE_MESSAGE_TEXT, text})

export let addMessageAC = (dialogText) => ({type: ADD_MESSAGE, dialogText})

export default dialogReducerTs