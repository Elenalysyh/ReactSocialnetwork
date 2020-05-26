import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {props.dialogPage.dialogsList.map((item) => {
                    return <Dialog name={item.name} id={item.id} kye={item.id}></Dialog>
                })}
            </div>
            <div className={style.messages}>
                {props.dialogPage.messageList.map((item)=> {
                    return <Message kye={item.id} message={item.message}></Message>
                })}
            </div>
        </div>
    )
}

export default Dialogs
