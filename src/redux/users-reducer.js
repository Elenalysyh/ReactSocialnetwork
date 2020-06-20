import React from "react";
import {usersAPI} from "../api/api";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING = "IS_FETCHING";
const FINISH_FETCHING = "FINISH_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

let initialState = {
    items: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [2,3]
}

const usersReducer = (state=initialState, action) => {

    switch (action.type) {
            case FOLLOW_USER :
                return {...state,
                    items: state.items.map((item)=> {
                    if(item.id === action.id) {
                        return {...item, followed : true}
                    }
                    return item
                    })}
            case UNFOLLOW_USER :
                return {...state,
                    items: state.items.map((item)=> {
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
                        ? [...state.followingInProgress, action.iserId]
                        : state.followingInProgress.filter(id => id != action.iserId)
                }
            default :
                return {...state}
        }
}

export const followSuccess = (id)=>({type: FOLLOW_USER, id})
export const unfollowSuccess = (id)=>({type: UNFOLLOW_USER, id})
export const setUsers = (items) => ({type: SET_USERS, items})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const isFetchingNow = () => ({type: IS_FETCHING})
export const finishFetching = () => ({type: FINISH_FETCHING})
export const followingInProgressNow = (isFollowing, iserId) => ({type: FOLLOWING_IN_PROGRESS, isFollowing, iserId})


export const getUsersThunk =  (currentPage,pageSize)=> {
    return (dispatch) => {
        dispatch(isFetchingNow())
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setTotalCount(data.totalCount))
            dispatch(finishFetching())
        })
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(followingInProgressNow(true, userId))
        usersAPI.unfollowUser(userId).then(data=>{
            if(data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(followingInProgressNow(false, userId))
        })
    }
}


export const follow = (userId) => {
    return (dispatch) => {
        dispatch(followingInProgressNow(true, userId))
        usersAPI.followUser(userId).then(data=>{
            if(data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(followingInProgressNow(false, userId))
        })
    }
}

export default usersReducer

