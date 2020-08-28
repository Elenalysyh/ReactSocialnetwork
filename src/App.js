import React, { Suspense, lazy } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import Login from "./components/Login/login";
import {connect} from "react-redux";
import {authThunk} from "./redux/auth-reducer";
import {compose} from "redux";
import {initialazedApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
const Login = lazy(() => import('./components/Login/login'));

class App extends React.Component {
    componentDidMount() {
        this.props.initialazedApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Loader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <Suspense fallback={<Loader/>}>
                    <div className="app-wrapper-content">
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/profile'}/>}/>
                            <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
                            <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                            <Route path={'/users'} render={() => <UsersContainer/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 NOT FOUNDED</div>}/>
                        </Switch>

                    </div>
                </Suspense>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.isInitialize.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initialazedApp})) (App);
