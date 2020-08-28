import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         saveAvatarPhoto={props.saveAvatarPhoto}
                         saveProfile={props.saveProfile}
                         profile={props.profile}
                         updateUserStatus={props.updateUserStatus}
                         status={props.status}/>
            <MyPostsContainer></MyPostsContainer>
        </div>
    )
}

export default Profile