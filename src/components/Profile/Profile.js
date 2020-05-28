import React from "react";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPostsContainer></MyPostsContainer>
        </div>
    )
}

export default Profile