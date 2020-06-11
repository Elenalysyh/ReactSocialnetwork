import React from "react";

const FOLLOW_USER = "FOLLOW_USER";
const UNFOLLOW_USER = "UNFOLLOW_USER";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

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
    currentPage: 2
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
            default :
                return {...state}
        }
}

export const followAC = (id)=>({type: FOLLOW_USER, id})
export const unfollowAC = (id)=>({type: UNFOLLOW_USER, id})
export const setUsercAC = (items) => ({type: SET_USERS, items})
export const currentPageAC = (page) => ({type: SET_CURRENT_PAGE, currentPage: page})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount: totalCount})


export default usersReducer

