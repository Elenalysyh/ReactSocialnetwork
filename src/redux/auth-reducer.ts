import React from "react";
import {authAPI, ResultCodeLoginEnum, ResultCodeWithCaptcha, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {FormAction} from "redux-form/lib/actions";

const SET_USER_DATA = "/auth/SET_USER_DATA";
const GET_CAPTURE_SECCESS = "GET_CAPTURE_SECCESS";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    getCapture: null as string | null
}

export type initialStateType = typeof initialState

// ActionCreator

type setAuthUserDataType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    data: setAuthUserDataType
}
export const setAuthUserData =
    (userId: number | null, email: string | null, login: string | null, isAuth: boolean) :
        setAuthUserDataActionType =>({type: SET_USER_DATA, data: {id: userId, email, login, isAuth}})

type getCaptureSuccessType = {
    type: typeof GET_CAPTURE_SECCESS,
    url: string
}

export const getCaptureSuccess = (url: string) : getCaptureSuccessType =>({type: GET_CAPTURE_SECCESS, url})

type ActionType = setAuthUserDataActionType | getCaptureSuccessType | FormAction

const authReducer = (state=initialState, action: ActionType) : initialStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {...state,
                // @ts-ignore
                ...action.data
            }
        case GET_CAPTURE_SECCESS :
            return {...state,
                // @ts-ignore
                getCapture: action.url
            }
        default :
            return {...state}
    }
}

// ThunkCreator

type ThunkType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const authThunk = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.authMe()
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true))
        }
    }
}

export const loginThunk =
    (email: string | null, password: string | null, rememberme: boolean, captcha: string | null) : ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.login(email, password, true, captcha)
        if(data.resultCode === ResultCodeLoginEnum.Success) {
            dispatch(authThunk())
        } else {
            if (data.resultCode === ResultCodeWithCaptcha.CaptchaIsRequired) {
                dispatch(getCaptureThunk())
            }
            let message = data.messages.length > 0 ? data.messages[0] : "Some error";
            let action = stopSubmit('login', {_error: message})
            dispatch(action)
        }
    }
}

export const logoutThunk = () : ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.logout()
        if(data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}
export const getCaptureThunk = () : ThunkType => {
    return async (dispatch) => {
        let data = await securityApi.getCaptureUrl()
        let url = data.url
        dispatch(getCaptureSuccess(url))
    }
}

export default authReducer

