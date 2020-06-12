import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";

function App(props) {
  return (

          <div className='app-wrapper'>
              <Header></Header>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  <Route path={'/profile'}  render={() => <ProfileContainer ></ProfileContainer>}></Route>
                  <Route path={'/dialogs'} render={() => <DialogsContainer></DialogsContainer>}></Route>
                  <Route path={'/users'} render={() => <UsersContainer></UsersContainer>}></Route>


              </div>

          </div>

  ); 
}

export default App;
