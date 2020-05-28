import React from "react";
import {addMessageAC, onChangeMessageTextAC} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>{(store => {
            let dialogPage = store.getState().dialogPage;

            let addMessage = () => {
                store.dispatch(addMessageAC())
            }

            let onChangeMessageText = (text) => {
                store.dispatch(onChangeMessageTextAC(text))
            }
            return  <Dialogs dialogPage={dialogPage} onChangeMessageText={onChangeMessageText} addMessage={addMessage}/>
        })}</StoreContext.Consumer>
   )
}

export default DialogsContainer
