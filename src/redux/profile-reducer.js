import React from "react";
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";


let initialState = {
    myposts : [
        {message: 'How are you',id: 1, likesCount: 10},
        {message: 'I am fine',id: 2, likesCount: 23},
        {message: 'thanke',id: 3, likesCount: 15},
        {message: 'you',id: 4, likesCount: 100}
    ],
    // newProstValue: 'Some text',
    profile : null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state,
                myposts: [...state.myposts, {
                    src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png",
                    text: state.newPostElement,
                    id: 6
                }],
                newPostElement: ''}

        case UPDATE_NEW_POST:
            return {...state, newPostElement: action.text }

        default :
            return {...state}
    }
}

export let addPostAC = () => ({ type: ADD_POST })

export let onChangePostAC = (text) => ({type: UPDATE_NEW_POST, text: text})

export default profileReducer