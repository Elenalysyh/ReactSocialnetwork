import React from "react";
import Header, {DispatchPropsType, MapPropsType} from "./Header";
import {connect} from "react-redux";
import {logoutThunk} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<MapPropsType & DispatchPropsType>{
    render() {
        return (
            <Header logoutThunk={this.props.logoutThunk} userId={this.props.userId} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth}></Header>
        );
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        userId: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    } as MapPropsType
}

export default connect<MapPropsType, DispatchPropsType, {}, StateType>(mapStateToProps, {logoutThunk})(HeaderContainer)