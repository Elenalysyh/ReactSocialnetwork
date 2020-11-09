import React, { Suspense, lazy, Component } from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initialazedApp} from "./redux/app-reducer";
import Loader from "./components/common/Loader";
import {StateType} from "./redux/redux-store";
import {Login} from "./components/Login/login";

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersPage = lazy(() => import('./components/Users/UsersContainer'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = { initialazedApp: ()=> void }

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("Some error occured")
    }

    componentDidMount() {
        this.props.initialazedApp();
        // window.addEventListener("unhandlerejjection", this.catchAllUnhandledErrors)

    }
    componentWillUnmount(): void {
        // window.removeEventListener("unhandlerejjection", this.catchAllUnhandledErrors )
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
                            <Route path={'/users'} render={() => <UsersPage pageTitle={"Users page"}/>}/>
                            <Route path={'/login'} render={() => <Login/>}/>
                            <Route path={'*'} render={() => <div>404 NOT FOUNDED</div>}/>
                        </Switch>

                    </div>
                </Suspense>
            </div>
        );
    }
}

let mapStateToProps = (state: StateType) => {
    return {
        initialized: state.isInitialize.initialized
    }
}

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initialazedApp}))(App);