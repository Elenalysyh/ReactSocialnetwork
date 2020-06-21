import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunk, setAuthUserData} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component{
    componentDidMount() {
        this.props.authThunk()
    }

    render() {
        return (
            <Header userId={this.props.userId} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}></Header>
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

export default connect(mapStateToProps, {setAuthUserData, authThunk})(HeaderContainer)