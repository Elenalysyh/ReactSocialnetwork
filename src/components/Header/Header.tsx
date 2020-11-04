import React from "react";
import style from "./Header.module.css"
import {NavLink} from "react-router-dom";
import exp from "constants";


export type MapPropsType = {
    login: string,
    isAuth: boolean,
    userId: number,
    email: string
}
export type DispatchPropsType = {
    logoutThunk: () => void
}
type PropsType = MapPropsType & DispatchPropsType;

const Header: React.FC<PropsType> = ({login, isAuth, logoutThunk}) => {

    return (
        <header  className={style.header}>
            <img src='https://alllogos.ru/images/logotip-ghostbuster.jpg'/>
            {isAuth? <p className={style.logOut} > {login} <button onClick={logoutThunk}>LogOut</button></p>
                : <div className={style.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>}

        </header>
    )
}

export default Header;