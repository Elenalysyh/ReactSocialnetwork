import React from "react";
import {addMessageAC, onChangeMessageTextAC} from "../../redux/dialog-reducer";
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
        onChangeMessageText: (text) => {
            dispatch(onChangeMessageTextAC(text))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

const DialogsContainer = compose(WithLogin,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)

export default DialogsContainer
