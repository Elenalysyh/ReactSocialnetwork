import React from "react";
import {profileAPI} from "../api/api";
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST = "UPDATE_NEW_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const GET_USER_STATUS = "GET_USER_STATUS";


let initialState = {
    myposts : [
        {text: 'How are you',id: 1 ,likesCount: 10},
        {text: 'I am fine',id: 2, likesCount: 23},
        {text: 'thanke',id: 3, likesCount: 15},
        {text: 'you',id: 4, likesCount: 100}
    ],
    // newProstValue: 'Some text',
    profile : null,
    status: 'Empty'
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
        case SET_USER_STATUS:
                    return {...state, status: action.status }
        default :
            return {...state}
    }
}

export let addPostAC = () => ({ type: ADD_POST })

export let onChangePostAC = (text) => ({type: UPDATE_NEW_POST, text: text})

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status})

export let getUserStatusThunk = (userId) => {

    return (dispatch) => {
        profileAPI.getStatus(userId).then((status)=>{
            dispatch(setUserStatus(status.data))
        })
    }
}


export let updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response)=> {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(response))
            }
        })
    }
}

export let getUserProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId).then(response=>{
            dispatch(setUserProfile(response))
        })
    }
}

export default profileReducer