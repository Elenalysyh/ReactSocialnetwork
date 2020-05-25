import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <div className='app-wrapper'>
              <Header></Header>
              <Nav></Nav>

              <div className="app-wrapper-content">
                  {/*/!*<Profile></Profile>*!/*/}
                  {/*<Dialogs></Dialogs>*/}
                  <Route path={'/profile'} component={Profile}></Route>
                  <Route path={'/dialogs'} component={Dialogs}></Route>
                  <Route path={'/users'} component={Dialogs}></Route>


              </div>

          </div>
      </BrowserRouter>
  ); 
}

export default App;
