import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../types/types";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";

const Profile : React.FC<ProfileInfoType>  = (props ) => {

    // const profile = useSelector((state: StateType) => {
    //     return state.profilePage.profile
    // })
    //
    // const status = useSelector((state: StateType) => {
    //     return state.profilePage.status
    // })
    //
    // const authorizedUserId = useSelector((state: StateType) => {
    //     return state.auth.id
    // })
    //
    // const isAuth = useSelector((state: StateType) => {
    //     return state.auth.isAuth
    // })
    //
    // const dispatch = useDispatch()
    //
    // const getUserProfileThunk = (userId: number) => {
    //     dispatch(getUserProfileThunk(userId))
    // }
    //
    // const getUserStatusThunk = (userId: number) => {
    //     dispatch(getUserStatusThunk(userId))
    // }
    //
    // useEffect(() => {
    //     let userId = null;
    //     if(!userId) {
    //         userId = authorizedUserId
    //         if(!userId) {
    //      //       this.props.history.push('/login')
    //         }
    //     }
    //     if(!userId) {
    //         throw new Error("ID should exist");
    //     } else {
    //         getUserProfileThunk(userId)
    //         getUserStatusThunk(userId)
    //     }
    // }, [])
    //


    return (
        <div>
            <ProfileInfo isOwner={props.isOwner}
                         profile={props.profile}
                         saveAvatarPhoto={props.saveAvatarPhoto}
                         saveProfile={props.saveProfile}
                         updateUserStatus={props.updateUserStatus}
                         status={props.status}/>
            <MyPostsContainer/>
        </div>
    )
}
export default Profile