import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    render() {
        return (
            <Header logoutThunk={this.props.logoutThunk} userId={this.props.userId} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}></Header>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer)