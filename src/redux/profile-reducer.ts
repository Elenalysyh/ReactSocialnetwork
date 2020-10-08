import {PhotosType, PostsType, ProfileType } from "../types/types";
import {BaseThunkActionType, InferActionsType, StateType} from "./redux-store";
import {profileAPI} from "../api/profile-api";
import {ResultCodeLoginEnum} from "../api/api";
const ADD_POST = "SN/profile/ADD_POST";
const SET_USER_PROFILE = "SN/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "SN/profile/SET_USER_STATUS";
const SAVE_FILE_SUCCESS = "SN/profile/SAVE_FILE_SUCCESS";
const SAVE_PROFILE_SUCCESS = "SN/profile/SAVE_PROFILE_SUCCESS";

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

export const actions = {
    savePhotoSuccess : (photo: PhotosType)  => ({type: "SN/profile/SAVE_FILE_SUCCESS", photo} as const),
    setUserStatus : (status: string) => ({ type: "SN/profile/SET_USER_STATUS", status} as const),
    setUserProfile : (profile : ProfileType) => ({type: "SN/profile/SET_USER_PROFILE", profile} as const),
    addPostAC : (mypost : string) => ({ type: "SN/profile/ADD_POST" , mypost} as const),
    saveProfileSuccess: (profile: ProfileType) => ({type: "SN/profile/SAVE_PROFILE_SUCCESS", profile} as const)
}

type ActionType = InferActionsType<typeof actions>

type ThunkActionType = BaseThunkActionType<ActionType>

export let getUserStatusThunk = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        let status = await profileAPI.getStatus(userId)
        dispatch(actions.setUserStatus(status))
    }
}

export let saveAvatarPhoto = (photo: PhotosType) : ThunkActionType=> {
    return async (dispatch) => {
        let data = await profileAPI.savePhoto(photo);
        if(data.resultCode === ResultCodeLoginEnum.Success) {
            dispatch(actions.savePhotoSuccess(photo))
        }
    }
}

export let saveProfile = (info: any) : ThunkActionType => {
    return async (dispatch, getState) => {
        const userId = getState().auth.id
        let response = await profileAPI.saveProfile({...info})
        if (response.data.resultCode === ResultCodeLoginEnum.Success) {
            let responseProfile = await profileAPI.getUserProfile(userId)
            dispatch(actions.saveProfileSuccess(responseProfile))
        }
    }
}

export let updateUserStatus = (status: string) : ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if(response.resultCode === ResultCodeLoginEnum.Success) {
            dispatch(actions.setUserStatus(status))
        }
    }
}

export let getUserProfileThunk = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.getUserProfile(userId)
        dispatch(actions.setUserProfile(response))
    }
}

export default profileReducer