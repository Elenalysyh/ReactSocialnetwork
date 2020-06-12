import React from "react";
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
    myposts : [
        {text: 'How are you',id: 1 ,likesCount: 10},
        {text: 'I am fine',id: 2, likesCount: 23},
        {text: 'thanke',id: 3, likesCount: 15},
        {text: 'you',id: 4, likesCount: 100}
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

        case SET_USER_PROFILE:
            return {...state, profile: action.profile }

        default :
            return {...state}
    }
}

export let addPostAC = () => ({ type: ADD_POST })

export let onChangePostAC = (text) => ({type: UPDATE_NEW_POST, text: text})

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer