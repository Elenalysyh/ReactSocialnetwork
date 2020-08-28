import React from "react";
import {authAPI, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "/auth/SET_USER_DATA";
const GET_CAPTURE_SECCESS = "GET_CAPTURE_SECCESS";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    getCapture: null
}

const authReducer = (state=initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA :
                return {...state,
                    ...action.data
                    }
        case GET_CAPTURE_SECCESS :
                return {...state,
                    getCapture: action.url
                    }
            default :
                return {...state}
        }
}
 // ActionCreator
export const setAuthUserData = (id, email, login, isAuth)=>({type: SET_USER_DATA, data: {id, email, login, isAuth}})

export const getCaptureSuccess = (url)=>({type: "GET_CAPTURE_SECCESS", url})

// ThunkCreator

export const authThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.authMe()
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
    }
}

export const loginThunk = (email, password, rememberme, captcha) => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, true, captcha)
            if(data.data.resultCode === 0) {
                dispatch(authThunk())
            } else {
                if (data.data.resultCode === 10) {
                    dispatch(getCaptureThunk())
                }
                let message = data.data.messages.length > 0 ? data.data.messages[0] : "Some error";
                let action = stopSubmit('login', {_error: message})
                dispatch(action)
            }
    }
}

export const logoutThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.logout()
            if(data.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
    }
}
export const getCaptureThunk = () => {
    return async (dispatch) => {
        let data = await securityApi.getCaptureUrl()
        let url = data.url
        dispatch(getCaptureSuccess(url))
    }
}

export default authReducer

