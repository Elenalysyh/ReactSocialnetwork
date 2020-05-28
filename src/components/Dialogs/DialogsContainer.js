import React from "react";
import {addMessageAC, onChangeMessageTextAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let dialogPage = props.store.getState().dialogPage;

    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onChangeMessageText = (text) => {
        props.store.dispatch(onChangeMessageTextAC(text))
    }
    return (
        <Dialogs dialogPage={dialogPage} onChangeMessageText={onChangeMessageText} addMessage={addMessage}/>
    )
}

export default DialogsContainer
