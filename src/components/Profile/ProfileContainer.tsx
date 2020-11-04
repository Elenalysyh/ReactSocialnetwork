import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    actions,
    getUserProfileThunk,
    getUserStatusThunk, saveAvatarPhoto, saveProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {ProfileType} from "../../types/types";
import {StateType} from "../../redux/redux-store";


//untyped type
type ProfileContainerType = ReturnType<typeof mapStateToProps>

type MapDispatchToPropsType = {
    getUserProfileThunk: (userId: number) => void
    getUserStatusThunk: (userId: number) => void
    updateUserStatus: () => void
    saveAvatarPhoto: (file: File) => void
    saveProfile: (profile:ProfileType) => Promise<any>
}
type PathParamsType = {
    userId: string
}

type PropsType = ProfileContainerType & MapDispatchToPropsType & RouteComponentProps<PathParamsType>

class ProfileContainer  extends React.Component<PropsType> {
    refreshProfile() {
        let userId: number | null = +this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        if(!userId) {
            throw new Error("ID should exist");
        } else {
            this.props.getUserProfileThunk(userId as number)
            this.props.getUserStatusThunk(userId as number)
        }
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: PropsType) {
        if(this.props.match.params.userId !== prevProps.match.params.userId  ) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={ !this.props.match.params.userId}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     saveAvatarPhoto={this.props.saveAvatarPhoto}
                     saveProfile={this.props.saveProfile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null,
    status: string,
    authorizedUserId: number | null,
    isAuth: boolean
}

let mapStateToProps = (state: StateType) : MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,

});

const setUserProfile = actions.setUserProfile

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk, updateUserStatus,
        getUserStatusThunk, saveAvatarPhoto,saveProfile}) )(ProfileContainer)