import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfileThunk, setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {getUserProfile, profileAPI} from "../../api/api";

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

let WithUrlData = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile, getUserProfileThunk})(WithUrlData)