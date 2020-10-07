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
type DialogsListType = {
    name: string
    id: number
}
type MessageListType = {
    name: string
    id: number
}


export type DialogPageType = {
    dialogsList: DialogsListType
    messageList: MessageListType
}
const dialogReducer = (state=initialState, action: ActionType) => {
    switch (action.type) {
        case ADD_MESSAGE :
            return {...state,
                messageList: [...state.messageList, {id: 6, message: action.dialogText}]

            }
        default:
                return {...state}
    }
}

type OnChangeMessageTextACType = {
    type: typeof ONCHANGE_MESSAGE_TEXT
    text: string
}
export let onChangeMessageTextAC = (text: string) : OnChangeMessageTextACType =>({type: ONCHANGE_MESSAGE_TEXT, text})

type AddMessageACType = {
    type: typeof  ADD_MESSAGE
    dialogText: string
}
export let addMessageAC = (dialogText: string) : AddMessageACType => ({type: ADD_MESSAGE, dialogText})

type ActionType = OnChangeMessageTextACType | AddMessageACType

export default dialogReducer