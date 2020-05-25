import React from "react";
import style from "./Message.module.css"
import {NavLink} from "react-router-dom";

const Message = ({message}) => {
    return (
            <div className={style.messages}>
                <div className={style.message}>{message}</div>
            </div>

    )
}

export default Message
