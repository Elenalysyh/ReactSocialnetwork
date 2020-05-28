import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
  return (

          <div className='app-wrapper'>
              <Header></Header>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  {/*/!*<Profile></Profile>*!/*/}
                  {/*<Dialogs></Dialogs>*/}
                  <Route path={'/profile'}  render={() => <Profile store={props.store} ></Profile>}></Route>
                  <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}></DialogsContainer>}></Route>
                  <Route path={'/users'} render={() => <Profile store={props.store}></Profile>}></Route>


              </div>

          </div>

  ); 
}

export default App;
