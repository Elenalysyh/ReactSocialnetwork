import { UserType } from "../types/types";
import { ThunkAction } from "redux-thunk";
import {BaseThunkActionType, InferActionsType, StateType} from "./redux-store";
import {usersAPI} from "../api/users-api";
import {ResultCodeLoginEnum} from "../api/api";
import {strict} from "assert";
type InitialStateType = typeof initialState

let initialState = {
    items: [] as Array<UserType>,
    pageSize: 10,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true,
    followingInProgress: [2,3] as Array<number>,
    filter: {
        term: "",
        friend: null as null | boolean
    }
}
export type initialStateType = typeof initialState
export type FilterType = typeof initialState.filter

const usersReducer = (state=initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
            case "FOLLOW_USER" :
                return {...state,
                    items: state.items.map((item: UserType)=> {
                    if(item.id === action.id) {
                        return {...item, followed : true}
                    }
                    return item
                    })}
            case "UNFOLLOW_USER" :
                return {...state,
                    items: state.items.map((item: UserType)=> {
                        if(item.id === action.id) {
                            return {...item, followed : false}
                        }
                        return item
                    })}
            case "SET_USERS" :
                return {...state,
                items: action.users
                }
            case "SET_CURRENT_PAGE" :
                return {...state,
                currentPage: action.currentPage
                }
            case "SET_TOTAL_COUNT" :
                return {...state,
                totalUserCount: action.totalCount
                }
            case "IS_FETCHING" :
                return {...state,
                isFetching: true
                }
            case "SN/USERS/SET_FILTER" :
                return  {
                    ...state, filter: action.payload
                }
            case "FINISH_FETCHING" :
                return {...state,
                    isFetching: false
                }
        case "FOLLOWING_IN_PROGRESS" :
                return {...state,
                    followingInProgress: action.isFollowing
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(id => id != action.userId)
                }
            default :
                return {...state}
        }
}

export const action = {
    followSuccess: (id: number) =>({type: "FOLLOW_USER", id} as const),
    unfollowSuccess: (id: number)  =>({type: "UNFOLLOW_USER", id} as const),
    setCurrentPage: (page: number)  => ({type: "SET_CURRENT_PAGE", currentPage: page} as const),
    setUsers: (users: Array<UserType>) => ({type: "SET_USERS", users} as const),
    setTotalCount: (totalCount: number)  => ({type: "SET_TOTAL_COUNT", totalCount: totalCount} as const),
    setFilter: (filter: FilterType) => ({type: "SN/USERS/SET_FILTER", payload: filter} as const),
    isFetchingNow: ()  => ({type: "IS_FETCHING"} as const),
    finishFetching: ()  => ({type: "FINISH_FETCHING"} as const),
    followingInProgressNow: (isFollowing: boolean, userId: number) => ({type: "FOLLOWING_IN_PROGRESS", isFollowing, userId} as const)

}

export const setCurrentPage = action.setCurrentPage
export const followingInProgressNow = action.followingInProgressNow
type ActionType = InferActionsType<typeof action>

//Thunk
type ThunkActionType = BaseThunkActionType<ActionType>

export const getUsersThunk =  (currentPage: number, pageSize: number, filter: FilterType) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(action.isFetchingNow())
        dispatch(action.setFilter(filter))
        let data = await usersAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(action.setUsers(data.items))
        dispatch(action.setTotalCount(data.totalCount))
        dispatch(action.finishFetching())
    }
}

export const unfollow = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(action.followingInProgressNow(true, userId))
        let data = await usersAPI.unfollowUser(userId);
        if(data.resultCode === ResultCodeLoginEnum.Success) {
            dispatch(action.unfollowSuccess(userId))
        }
            dispatch(action.followingInProgressNow(false, userId))
    }
}

export const follow = (userId: number) : ThunkActionType => {
    return async (dispatch) => {
        dispatch(action.followingInProgressNow(true, userId))
        let data = await usersAPI.followUser(userId);
        if(data.resultCode === 0) {
            dispatch(action.followSuccess(userId))
        }
        dispatch(action.followingInProgressNow(false, userId))
    }
}

export default usersReducer

