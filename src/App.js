import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import {connect} from "react-redux";
import {authThunk} from "./redux/auth-reducer";
import {compose} from "redux";
import {initialazedApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialazedApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Loader></Loader>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer></HeaderContainer>
                <Nav></Nav>

                <div className="app-wrapper-content">
                    <Route path={'/profile/:userId?'} render={() => <ProfileContainer></ProfileContainer>}></Route>
                    <Route path={'/dialogs'} render={() => <DialogsContainer></DialogsContainer>}></Route>
                    <Route path={'/users'} render={() => <UsersContainer></UsersContainer>}></Route>
                    <Route path={'/login'} render={() => <Login></Login>}></Route>
                </div>
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
