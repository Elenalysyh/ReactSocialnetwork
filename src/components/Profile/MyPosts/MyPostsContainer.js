import React from "react";
import {addPostAC, onChangePostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>{ (store) => {

            let addPost = () => {
                store.dispatch(addPostAC())
            }
            let onChangePost = (text) => {
                store.dispatch(onChangePostAC(text))
            }
            return      <MyPosts addPost={addPost}
                                 onChangePost = {onChangePost}
                                 myposts={store.getState().profilePage.myposts}
                                 newPostElement = {store.getState().profilePage.newPostElement} />

        }}</StoreContext.Consumer>
    )
}

export default MyPostsContainer
