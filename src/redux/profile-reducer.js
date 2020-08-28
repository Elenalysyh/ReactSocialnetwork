import React from "react";
import {profileAPI} from "../api/api";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_FILE_SUCCESS = "SAVE_FILE_SUCCESS";
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS";

let initialState = {
    myposts : [
        {text: 'How are you',id: 1 ,likesCount: 10},
        {text: 'I am fine',id: 2, likesCount: 23},
        {text: 'thanke',id: 3, likesCount: 15},
        {text: 'you',id: 4, likesCount: 100}
    ],
    profile : null,
    status: 'Empty'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST :
            return {...state,
                myposts: [...state.myposts, {
                    src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png",
                    text: action.mypost,
                    id: 6
                }]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile }
        case SET_USER_STATUS:
                    return {...state, status: action.status }
        case SAVE_FILE_SUCCESS:
                    return {...state, profile: {...state.profile, photos: action.photo} }
        case SAVE_PROFILE_SUCCESS:
                    return {...state, profile: {...state.profile, ...action.info} }
        default :
            return {...state}
    }
}

export let addPostAC = (mypost) => ({ type: ADD_POST , mypost})

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export let setUserStatus = (status) => ({ type: SET_USER_STATUS, status})

export let savePhotoSuccess = (photo) => ({type: SAVE_FILE_SUCCESS, photo})

export let saveProfileSuccess = (info) => ({type: SAVE_PROFILE_SUCCESS, info})

export let getUserStatusThunk = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((status)=>{
            dispatch(setUserStatus(status.data))
        })
    }
}

export let saveAvatarPhoto = (photo) => {
    return (dispatch) => {
        profileAPI.savePhoto(photo).then((response) => {
            if(response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(photo))
            }
        })
    }
}

export let saveProfile = (info)=> {
    return (dispatch, getState) => {
        const userId = getState().auth.id
        profileAPI.saveProfile({...info}).then((response) => {
            if (response.data.resultCode === 0) {
                profileAPI.getUserProfile(userId).then(response=>{
                    dispatch(saveProfileSuccess(response))
                })
            }
        })
    }
}

export let updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response)=> {

            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status))
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