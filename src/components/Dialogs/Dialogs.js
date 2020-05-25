import React from "react";
import style from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = [{name: "Lena", id: 1}, {name: "Olya", id: 2}, {name: "Zina", id: 3}, {name: "Lina", id: 4}]
    let message = [ {message: 'some1'}, {message: 'some2'}, {message: 'some3'}, {message: 'some4'}]
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                {state.map((item) => {
                    return <Dialog name={item.name} id={item.id}></Dialog>
                })}
            </div>
            <div className={style.messages}>
                {message.map((item)=> {
                    return <Message message={item.message}></Message>
                })}
            </div>
        </div>
    )
}

export default Dialogs
