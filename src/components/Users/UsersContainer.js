import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {unfollowAC, followAC, setUsercAC} from "./../../redux/users-reducer"
import UsersC from "./UsersC";

let mapStateToProps = (state) => {
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

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)

export default UsersContainer