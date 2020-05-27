import React from "react";
const ONCHANGE_MESSAGE_TEXT = "ONCHANGE_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE"

let initialState = {
    dialogData : [
        {name: 'Dimych',id: 1},
        {name: 'Sveta',id: 2},
        {name: 'Anton',id: 3},
        {name: 'Some',id: 4}
    ],
    messageData : [
        {message: 'Hello',id: 1},
        {message: 'Yeoo',id: 2},
        {message: 'Yeoo',id: 3},
        {message: 'EY',id: 4}
    ]
}
const dialogReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE :
            return {...state,
                newMessage: "",
                messageList: [...state.messageList, {id: 6, message: state.newMessage}]

            }
        case ONCHANGE_MESSAGE_TEXT :
            return {...state,
                newMessage: action.text}
    }

    return {...state}
}


export let onChangeMessageTextAC = (text) =>({type: ONCHANGE_MESSAGE_TEXT, text})

export let addMessageAC = () => ({type: ADD_MESSAGE})

export default dialogReducer