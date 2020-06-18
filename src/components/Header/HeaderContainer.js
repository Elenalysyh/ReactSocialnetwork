import React from "react";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import { authAPI} from "../../api/api";

class HeaderContainer extends React.Component{
    componentDidMount() {
        authAPI.authMe().then(data=>{
            if(data.resultCode === 0) {
                let {id, email, login} = data.data
                this.props.setAuthUserData(data.data.id, data.data.email, data.data.login)
            }

        })
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

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)