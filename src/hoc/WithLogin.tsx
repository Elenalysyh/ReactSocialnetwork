import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {StateType} from "../redux/redux-store";

let mapStateToProps = (state: StateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapPropsType = {
    isAuth: boolean
}

export function WithLogin<WCP>(WrappedComponent: React.ComponentType<WCP>) {

    class RedirectComponent extends React.Component<WCP& MapPropsType> {

        render() {
            let {isAuth, ...restProps} = this.props;
            if(!this.props.isAuth) {
                return <Redirect to={'/login'}></Redirect>
            }

            return <WrappedComponent {...restProps as WCP}/>
        }
    }
    // @ts-ignore
    return connect<MapPropsType, {}, WCP, StateType>(mapStateToProps)(RedirectComponent)

}

export default WithLogin