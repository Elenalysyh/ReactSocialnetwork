import React from "react";
import style from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    name: string,
    id: string
}
const Dialog: React.FC<PropsType> = ({name, id}) => {
    let path = '/dialogs/' + id
    return (
        <div className={style.dialog}>
            <NavLink to={path} className={style.dialog}>{name}</NavLink>
        </div>
    )
}

export default Dialog;