import React from "react";
import style from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <ProfileInfo></ProfileInfo>
            <MyPosts></MyPosts>
        </div>
    )
}

export default Profile