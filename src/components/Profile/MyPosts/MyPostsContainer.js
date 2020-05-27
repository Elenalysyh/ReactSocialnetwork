import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import {addPostAC, onChangePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onChangePost = (text) => {
       props.dispatch(onChangePostAC(text))
    }

    return (
        <MyPosts addPost={addPost} onChangePost = {onChangePost} profilePage={props.profilePage} ></MyPosts>
    )
}

export default MyPostsContainer
