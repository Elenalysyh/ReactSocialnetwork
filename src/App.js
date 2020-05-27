import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App(props) {
  return (

          <div className='app-wrapper'>
              <Header></Header>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  {/*/!*<Profile></Profile>*!/*/}
                  {/*<Dialogs></Dialogs>*/}
                  <Route path={'/profile'}  render={() => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}></Profile>}></Route>
                  <Route path={'/dialogs'} render={() => <Dialogs dialogPage={props.state.dialogPage}></Dialogs>}></Route>
                  <Route path={'/users'} render={() => <Profile profilePage={props.state.profilePage}></Profile>}></Route>


              </div>

          </div>

  ); 
}

export default App;
