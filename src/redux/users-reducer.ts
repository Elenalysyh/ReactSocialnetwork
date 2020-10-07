import React from "react";
import {usersAPI} from "../api/api";
import { PhotosType, UserType } from "../types/types";
import {Dispatch} from "redux";
import { ThunkAction } from "redux-thunk";
import {StateType} from "./redux-store";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING = "IS_FETCHING";
const FINISH_FETCHING = "FINISH_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

type InitialStateType = typeof initialState

let initialState = {
    items: [] as Array<UserType>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [2,3] as Array<number>
}

const usersReducer = (state=initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
            case FOLLOW_USER :
                return {...state,
                    items: state.items.map((item: UserType)=> {
                    if(item.id === action.id) {
                        return {...item, followed : true}
                    }
                    return item
                    })}
            case UNFOLLOW_USER :
                return {...state,
                    items: state.items.map((item: UserType)=> {
                        if(item.id === action.id) {
                            return {...item, followed : false}
                        }
                        return item
                    })}
            case SET_USERS :
                return {...state,
                items: action.items
                }
            case SET_CURRENT_PAGE :
                return {...state,
                currentPage: action.currentPage
                }
            case SET_TOTAL_COUNT :
                return {...state,
                totalUserCount: action.totalCount
                }
            case IS_FETCHING :
                return {...state,
                isFetching: true
                }
            case FINISH_FETCHING :
                return {...state,
                    isFetching: false
                }
        case FOLLOWING_IN_PROGRESS :
                return {...state,
                    followingInProgress: action.isFollowing
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            default :
                return {...state}
        }
}

type FollowSuccessType = {
    type: typeof FOLLOW_USER
    id: number
}
type UnfollowSuccessType = {
    type: typeof UNFOLLOW_USER
    id: number
}
type SetUsersType = {
    type: typeof SET_USERS
    items: Array<UserType>
}
type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetTotalCountType = {
    type: typeof SET_TOTAL_COUNT
    totalCount: number
}
type IsFetchingNowType = {
    type: typeof IS_FETCHING
}
type FinishFetchingType = {
    type: typeof FINISH_FETCHING
}
export type FollowingInProgressNowType = {
    type: typeof FOLLOWING_IN_PROGRESS
    isFollowing: boolean
    userId: number
}

type ActionType = FollowSuccessType | UnfollowSuccessType | SetUsersType | SetCurrentPageType |
    SetTotalCountType | IsFetchingNowType | FinishFetchingType | FollowingInProgressNowType

export const followSuccess = (id: number): FollowSuccessType =>({type: FOLLOW_USER, id})
export const unfollowSuccess = (id: number) : UnfollowSuccessType =>({type: UNFOLLOW_USER, id})
export const setUsers = (items: Array<UserType>) : SetUsersType => ({type: SET_USERS, items})
export const setCurrentPage = (page: number) : SetCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCount = (totalCount: number) : SetTotalCountType => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const isFetchingNow = () : IsFetchingNowType => ({type: IS_FETCHING})
export const finishFetching = () : FinishFetchingType => ({type: FINISH_FETCHING})
export const followingInProgressNow = (isFollowing: boolean, userId: number) : FollowingInProgressNowType => ({type: FOLLOWING_IN_PROGRESS, isFollowing, userId})

//Thunk
type ThunkActionType = ThunkAction<Promise<void>, StateType, unknown, ActionType>

export const getUsersThunk =  (currentPage: number, pageSize: number) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(isFetchingNow())
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items))
        dispatch(setTotalCount(data.totalCount))
        dispatch(finishFetching())
    }
}

export const unfollow = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(followingInProgressNow(true, userId))
        let data = await usersAPI.unfollowUser(userId);
        if(data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
            dispatch(followingInProgressNow(false, userId))

    }
}

export const follow = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(followingInProgressNow(true, userId))
        let data = await usersAPI.followUser(userId);
        if(data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(followingInProgressNow(false, userId))
    }
}

export default usersReducer

