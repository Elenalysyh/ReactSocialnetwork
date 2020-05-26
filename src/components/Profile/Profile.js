import React from "react";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts profilePage={props.profilePage} addPost={props.addPost} onChangeMyPost={props.onChangeMyPost}></MyPosts>
        </div>
    )
}

export default Profile