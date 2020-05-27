import React from "react";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const ONCHANGE_MESSAGE_TEXT = "ONCHANGE_MESSAGE_TEXT";
const ADD_MESSAGE = "ADD_MESSAGE"

let store = {
    _state: {
        profilePage : {
            myposts: [{src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Some text", id: 1},
                {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Lorem imsum ", id: 2},
                {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Hello ", id: 3},
                {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Sounds good", id: 4}],
            newPostElement: " "
        },
        dialogPage : { dialogsList: [{name: "Lena", id: 1}, {name: "Olya", id: 2}, {name: "Zina", id: 3}, {name: "Lina", id: 4}],
            messageList : [ {message: 'some1', id: 1}, {message: 'some2', id: 2}, {message: 'some3', id: 3}, {message: 'some4', id: 4}],
            newMessage: ''
        }
    },
    getState() {
        return this._state
    },
    rerenderEntireTree(){},
    subscribe (observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this.rerenderEntireTree(this)
    }

}

window.store = store;


export default store