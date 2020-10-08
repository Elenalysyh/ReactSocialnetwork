
import {ResultCodeLoginEnum, ResultCodeWithCaptcha} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkActionType, InferActionsType, StateType} from "./redux-store";
import {authAPI} from "../api/auth-api";
import {securityApi} from "../api/security-api";

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    getCapture: null as string | null
}

export type initialStateType = typeof initialState

// ActionCreator

const actions = {
    setAuthUserData : (userId: number | null, email: string | null, login: string | null, isAuth: boolean) =>
        ({type: "SN/auth/SET_USER_DATA", data: {id: userId, email, login, isAuth}} as const),

    getCaptureSuccess: (url: string) =>({type: "SN/auth/GET_CAPTURE_SECCESS", url} as const)

}

type ActionType = InferActionsType<typeof actions>

const authReducer = (state=initialState, action: ActionType) : initialStateType => {
    switch (action.type) {
        case "SN/auth/SET_USER_DATA" :
            return {...state,
                // @ts-ignore
                ...action.data
            }
        case "SN/auth/GET_CAPTURE_SECCESS" :
            return {...state,
                // @ts-ignore
                getCapture: action.url
            }
        default :
            return {...state}
    }
}

// ThunkCreator

type ThunkType = BaseThunkActionType<ActionType | FormAction>

export const authThunk = (): ThunkType => {
    return async (dispatch) => {
        let data = await authAPI.authMe()
        if(data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(actions.setAuthUserData(id, email, login, true))
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
        if(data.resultCode === ResultCodeLoginEnum.Success) {
            dispatch(actions.setAuthUserData(null, null, null, false))
        }
    }
}
export const getCaptureThunk = () : ThunkType => {
    return async (dispatch) => {
        let data = await securityApi.getCaptureUrl()
        dispatch(actions.getCaptureSuccess(data.url))
    }
}

export default authReducer

