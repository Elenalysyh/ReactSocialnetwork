import React from "react";
import style from "./Dialogs.module.css"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import DialogForm from "./DialogForm";
import {InitialStateType} from "../../redux/dialog-reducer";

type OwnPropsType = {
    dialogPage: InitialStateType,
    addMessage: (messageText: string) => void
}

export type NewMessageFormType = {
    dialogText: string
}

const Dialogs: React.FC<OwnPropsType> = (props) => {

    let state = props.dialogPage;

    let addMessage = (values: NewMessageFormType) => {
        props.addMessage(values.dialogText)
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {state.dialogsList.map((item) => {
                    //@ts-ignore
                    return <Dialog name={item.name} id={item.id} kye={item.id}></Dialog>
                })}
            </div>
            <div className={style.messages}>
                {state.messageList.map((item)=> {
                    //@ts-ignore
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
