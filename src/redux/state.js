import React from "react";

const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST"

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
            messageList : [ {message: 'some1', id: 1}, {message: 'some2', id: 2}, {message: 'some3', id: 3}, {message: 'some4', id: 4}]}
    },
    getState() {
        return this._state
    },
    rerenderEntireTree(){},
    subscribe (observer) {
        this.rerenderEntireTree = observer
    },
    dispatch(action) {
        if(action.type === ADD_POST) {
            let state = this.getState();
            state.profilePage.myposts.push({
                src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png",
                text: state.profilePage.newPostElement,
                id: 6
            })
            state.profilePage.newPostElement = ""
            this.rerenderEntireTree(this)
        } else if(action.type === UPDATE_NEW_POST) {
            let state = this.getState()
            state.profilePage.newPostElement = action.text
            this.rerenderEntireTree(this)
        }
    }

}

window.store = store;

export let addPostAC = () => ({ type: ADD_POST })

export let onChangePostAC = (text) => ({type: UPDATE_NEW_POST, text: text})

export default store