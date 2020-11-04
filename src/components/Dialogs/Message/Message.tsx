import React from "react";
import style from "./Message.module.css"
import {NavLink} from "react-router-dom";

type PropsType = {
    message: string
}

const Message: React.FC<PropsType> = ({message}) => {
    return (
        <div className={style.messages}>
            <div className={style.message}>{message}</div>
        </div>
    )
}

export default Message;