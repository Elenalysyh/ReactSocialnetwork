import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        myposts: state.profilePage.myposts,
        newPostElement: state.profilePage.newPostElement
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (mypost) => {
            dispatch(addPostAC(mypost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
