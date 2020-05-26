import React from "react";
import {rerenderEntireTree} from "../rerender";

let state = {
    profilePage : {
        myposts: [{src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Some text", id: 1},
            {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Lorem imsum ", id: 2},
            {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Hello ", id: 3},
            {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Sounds good", id: 4}],
        newPostElement: " "
    },
    dialogPage : { dialogsList: [{name: "Lena", id: 1}, {name: "Olya", id: 2}, {name: "Zina", id: 3}, {name: "Lina", id: 4}],
        messageList : [ {message: 'some1', id: 1}, {message: 'some2', id: 2}, {message: 'some3', id: 3}, {message: 'some4', id: 4}]}
}

window.state = state;

 export let addPost = () => {
     state.profilePage.myposts.push({
         src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png",
         text: state.profilePage.newPostElement,
         id: 6
     })
     state.profilePage.newPostElement = ""
     rerenderEntireTree(state)
}

export let onChangeMyPost = (value) => {
     state.profilePage.newPostElement = value
     rerenderEntireTree(state)
}


export default state