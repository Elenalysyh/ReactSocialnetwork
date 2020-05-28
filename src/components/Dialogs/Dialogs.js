import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let messageElem = React.createRef()
    let addMessage = () => {
        props.addMessage()
    }

    let onChangeMessageText = () => {
        let text = messageElem.current.value;
        props.onChangeMessageText(text)
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
                <div>
                    <textarea value={props.dialogPage.newMessage} ref={messageElem} onChange={onChangeMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs
