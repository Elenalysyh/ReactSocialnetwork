import {actions} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithLogin from "../../hoc/WithLogin";
import {compose} from "redux";
import { StateType } from "../../redux/redux-store";


let mapStateToProps = (state: StateType) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: (dialogText: string) => {
            dispatch(actions.addMessageAC(dialogText))
        }
    }
}

const DialogsContainer = compose<React.ComponentType>(WithLogin,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)

export default DialogsContainer
