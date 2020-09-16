import React from "react";
import {addMessageAC, onChangeMessageTextAC} from "../../redux/dialog-reducerTs";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import WithLogin from "../../api/WithLogin";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (dialogText) => {
            dispatch(addMessageAC(dialogText))
        }
    }
}

const DialogsContainer = compose(WithLogin,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)

export default DialogsContainer
