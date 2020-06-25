import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import DialogForm from "./DialogForm";

const Dialogs = (props) => {

    let addMessage = (data) => {
        props.addMessage(data.dialogText)
    }

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
                <DialogForm onSubmit={addMessage}></DialogForm>
                {/*<form>*/}
                {/*    <div>*/}
                {/*        <textarea value={props.dialogPage.newMessage} ref={messageElem} onChange={onChangeMessageText}></textarea>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <button onClick={addMessage}>Add message</button>*/}
                {/*    </div>*/}
                {/*</form>*/}

            </div>
        </div>
    )
}

export default Dialogs
