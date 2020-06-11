import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Users from "./components/Users/UsersDelete";
import UsersContainer from "./components/Users/UsersContainer";

function App(props) {
  return (

          <div className='app-wrapper'>
              <Header></Header>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  {/*/!*<Profile></Profile>*!/*/}
                  {/*<Dialogs></Dialogs>*/}
                  <Route path={'/profile'}  render={() => <Profile ></Profile>}></Route>
                  <Route path={'/dialogs'} render={() => <DialogsContainer></DialogsContainer>}></Route>
                  <Route path={'/users'} render={() => <UsersContainer></UsersContainer>}></Route>


              </div>

          </div>

  ); 
}

export default App;
