import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfileThunk,
    getUserStatusThunk, saveAvatarPhoto, saveProfile,
    setUserProfile,
    updateUserStatus
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import WithLogin from "../../api/WithLogin";
import {compose} from "redux";

class ProfileContainer  extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfileThunk(userId)
        this.props.getUserStatusThunk(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId  ) {
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

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,

});

export default compose(
    withRouter,
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk, updateUserStatus, getUserStatusThunk, saveAvatarPhoto,saveProfile}) )(ProfileContainer)