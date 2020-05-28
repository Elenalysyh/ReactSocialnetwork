import React from "react";
import {addPostAC, onChangePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostAC())
    }
    let onChangePost = (text) => {
       props.store.dispatch(onChangePostAC(text))
    }
debugger
    return (
        <MyPosts addPost={addPost}
                 onChangePost = {onChangePost}
                 myposts={props.store.getState().profilePage.myposts}
                 newPostElement = {props.store.getState().profilePage.newPostElement} />
    )
}

export default MyPostsContainer
