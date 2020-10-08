import {actions} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import WithLogin from "../../api/WithLogin";
import {compose} from "redux";
import { StateType } from "../../redux/redux-store";

type mapStateToPropsType = {
    dialogPage: {
        id: number
        message: string
    }
}

let mapStateToProps = (state: mapStateToPropsType) => {
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

const DialogsContainer = compose(WithLogin,
    connect(mapStateToProps, mapDispatchToProps))(Dialogs)

export default DialogsContainer
