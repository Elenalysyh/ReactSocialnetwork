import React from "react";
import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :
                return {...state,
                    ...action.data
                    }
            default :
                return {...state}
        }
}
 // ActionCreator
export const setAuthUserData = (id, email, login, isAuth)=>({type: SET_USER_DATA, data: {id, email, login, isAuth}})


// ThunkCreator

export const authThunk = () => {
    return (dispatch) => {
        return authAPI.authMe().then(data=>{
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
    }
}

export const loginThunk = (email, password, rememberme) => {
    return (dispatch) => {
        authAPI.login(email, password, true).then(data=> {
            if(data.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                let action = stopSubmit('login', {_error: message})
                dispatch(action)
            }
        })
    }
}
export const logoutThunk = () => {
    return (dispatch) => {
        authAPI.logout().then(data=> {
            if(data.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer

