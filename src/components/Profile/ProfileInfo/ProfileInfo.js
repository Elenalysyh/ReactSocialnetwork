import React from "react";
import Loader from "../../common/Loader";
import style from "./ProfileInfo.module.css"
import avatarDefault from "./../../../assets/images/flamingo.jpg"

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Loader></Loader>
    }

    return (
        <div className={style.profileContainer}>
            <img src={ props.profile.photos.large || avatarDefault}/>
            <div>
                <div>{props.profile.aboutMe || "Something new"}</div>
                <div>{props.profile.contacts.facebook || "Nothing"}</div>
            </div>
        </div>
    )
}

export default ProfileInfo
