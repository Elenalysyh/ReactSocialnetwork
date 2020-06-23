import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {getUserProfile, profileAPI} from "../../api/api";
import WithLogin from "../../api/WithLogin";
import Dialogs from "../Dialogs/Dialogs";
import {compose} from "redux";

class ProfileContainer  extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 7971
        }
        this.props.getUserProfileThunk(userId)

    }

    render() {
        return (
            <Profile {...this.props}  profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default compose(
    withRouter,
    WithLogin,
    connect(mapStateToProps, {setUserProfile, getUserProfileThunk}) )(ProfileContainer)