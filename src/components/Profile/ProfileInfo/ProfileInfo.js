import React from "react";
import Loader from "../../common/Loader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Loader></Loader>
    }
    return (
        <div>
            <img src={ props.profile ? props.profile.photos.large :''}/>
            <div>
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.contacts.facebook}</div>
            </div>
        </div>
    )
}

export default ProfileInfo
