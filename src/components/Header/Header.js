import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = ({id, email, login, isAuth}) => {

    return (
        <header  className={style.header}>
            <img src='https://alllogos.ru/images/logotip-ghostbuster.jpg'/>
            {isAuth? login
                : <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>}

        </header>
    )
}

export default Header