import React from "react";
import style from "./Nav.module.css"
import {Switch, Route, NavLink} from "react-router-dom"

const Nav = (props) => {
    return (
        <nav className={style.nav}>
            {/*<Switch>*/}
            {/*    <Route className={style.item} path="/profile">*/}
            {/*        Profile*/}
            {/*    </Route>*/}
            {/*    <Route className={style.item} path="/dialogs">*/}
            {/*        Dialogs*/}
            {/*    </Route>*/}
            {/*    <Route className={style.item} path="/users">*/}
            {/*        Users*/}
            {/*    </Route>*/}
            {/*</Switch>*/}
            <div className={style.item}>
                <NavLink to="/profile" activeClassName={style.activeLink}>Profile</NavLink>
            </div>
            <div className={`${style.item} ${style.activeLink}` }>
                <NavLink to="/dialogs" activeClassName={style.activeLink}>Dialog</NavLink></div>
            <div className={style.item} >
                <NavLink to="/users" activeClassName={style.activeLink}>Users</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to="/Music" activeClassName={style.activeLink}>Music</NavLink>
            </div>
        </nav>
    )
}

export default Nav