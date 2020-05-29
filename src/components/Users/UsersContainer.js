import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {unfollowAC, followAC, setUsercAC} from "./../../redux/users-reducer"

let mapStateToProps = (state) => {
    debugger
    return {
        items: state.usersPage.items
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsercAC(users))
        }

    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer