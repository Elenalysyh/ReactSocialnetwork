import React from "react";
import {authAPI} from "../api/api";

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
                    ...action.data,
                    isAuth: true
                    }
            default :
                return {...state}
        }
}
 // ActionCreator
export const setAuthUserData = (id, email, login)=>({type: SET_USER_DATA, data: {id, email, login}})


// ThunkCreator

export const authThunk = () => {
    return (dispatch) => {
        authAPI.authMe().then(data=>{
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}


export default authReducer

