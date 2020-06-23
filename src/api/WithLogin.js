import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let WithLogin = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) {
                return <Redirect to={'/login'}></Redirect>
            }
            return <Component {...this.props}></Component>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)

}

export default WithLogin