import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../types/types";

const Profile : React.FC<ProfileInfoType>  = (props ) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         saveAvatarPhoto={props.saveAvatarPhoto}
                         saveProfile={props.saveProfile}
                         profile={props.profile}
                         updateUserStatus={props.updateUserStatus}
                         status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile