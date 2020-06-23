import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";

function App(props) {
  return (

          <div className='app-wrapper'>
              <HeaderContainer></HeaderContainer>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  <Route path={'/profile/:userId?'}  render={() => <ProfileContainer ></ProfileContainer>}></Route>
                  <Route path={'/dialogs'} render={() => <DialogsContainer></DialogsContainer>}></Route>
                  <Route path={'/users'} render={() => <UsersContainer></UsersContainer>}></Route>
                  <Route path={'/login'} render={() => <Login></Login>}></Route>
              </div>
          </div>
  ); 
}

export default App;
