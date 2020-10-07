import {profileAPI} from "../api/api";
import {PhotosType, PostsType, ProfileType } from "../types/types";
import {FormSubmitHandler} from "redux-form";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {Dispatch} from "redux";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";
const SAVE_FILE_SUCCESS = "SAVE_FILE_SUCCESS";
const SAVE_PROFILE_SUCCESS = "SAVE_PROFILE_SUCCESS";

export type initialStateType = typeof initialState

let initialState = {
    myposts : [
        {text: 'How are you',id: 1 ,likesCount: 10},
        {text: 'I am fine',id: 2, likesCount: 23},
        {text: 'thanke',id: 3, likesCount: 15},
        {text: 'you',id: 4, likesCount: 100}
    ] as Array<PostsType>,
    profile : null as ProfileType | null,
    status: 'Empty'
}

const profileReducer = (state = initialState, action: ActionType) : initialStateType => {

    switch (action.type) {
        case ADD_POST :
            return {...state,
                myposts: [...state.myposts, {
                    src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png",
                    text: action.mypost,
                    id: 6,
                    likesCount: 0
                }]}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile }
        case SET_USER_STATUS:
                    return {...state, status: action.status }
        case SAVE_FILE_SUCCESS:
                    return {...state, profile: {...state.profile, photos: action.photo} as ProfileType}
        case SAVE_PROFILE_SUCCESS:
                    return {...state, profile: {...state.profile, ...action.profile} as ProfileType }
        default :
            return {...state}
    }
}

type AddPostAcType = {
    type: typeof ADD_POST
    mypost: string
}

export let addPostAC = (mypost : string) : AddPostAcType => ({ type: ADD_POST , mypost})

type SetUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export let setUserProfile = (profile : ProfileType): SetUserProfileType => ({type: SET_USER_PROFILE, profile})

type SetUserStatusType = {
    type: typeof SET_USER_STATUS
    status: string
}
export let setUserStatus = (status: string) : SetUserStatusType=> ({ type: SET_USER_STATUS, status})

type SavePhotoSuccessType = {
    type: typeof SAVE_FILE_SUCCESS
    photo: PhotosType
}
export let savePhotoSuccess = (photo: PhotosType) : SavePhotoSuccessType => ({type: SAVE_FILE_SUCCESS, photo})

type SaveProfileSuccessType = {
    type: typeof SAVE_PROFILE_SUCCESS
    profile: ProfileType
}
export let saveProfileSuccess = (profile: ProfileType): SaveProfileSuccessType => ({type: SAVE_PROFILE_SUCCESS, profile})

type ActionType = AddPostAcType | SetUserProfileType | SetUserStatusType | SavePhotoSuccessType | SaveProfileSuccessType


type ThunkActionType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export let getUserStatusThunk = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(status.data))
    }
}

export let saveAvatarPhoto = (photo: PhotosType) : ThunkActionType=> {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(photo);
        if(response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(photo))
        }
    }
}

export let saveProfile = (info: any) : ThunkActionType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id
        let response = await profileAPI.saveProfile({...info})
        if (response.data.resultCode === 0) {
            let responseProfile = await profileAPI.getUserProfile(userId)
            dispatch(saveProfileSuccess(responseProfile))
        }
    }
}

export let updateUserStatus = (status: string) : ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
        }
    }
}

export let getUserProfileThunk = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(setUserProfile(response))
    }
}

export default profileReducer