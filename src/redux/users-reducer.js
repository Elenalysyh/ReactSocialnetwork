import React from "react";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING = "IS_FETCHING";
const FINISH_FETCHING = "FINISH_FETCHING";

let initialState = {
       items: [
    //     {
    //         "name": "Shubert",
    //         "id": 1,
    //         "photos": {
    //             "small": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg",
    //             "large": null
    //         },
    //         "status": null,
    //         "followed": false
    //     },
    //     {
    //         "name": "Hacker",
    //         "id": 2,
    //         "photos": {
    //             "small": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg",
    //             "large": null
    //         },
    //         "status": null,
    //         "followed": true
    //     }
    ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 2,
    isFetching: true
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
            default :
                return {...state}
        }
}

export const follow = (id)=>({type: FOLLOW_USER, id})
export const unfollow = (id)=>({type: UNFOLLOW_USER, id})
export const setUsers = (items) => ({type: SET_USERS, items})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})
export const isFetchingNow = () => ({type: IS_FETCHING})
export const finishFetching = () => ({type: FINISH_FETCHING})


export default usersReducer

