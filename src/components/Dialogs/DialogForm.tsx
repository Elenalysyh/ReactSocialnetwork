import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../utils/validators";
import {TextArea} from "../common/FormControls/FormControls";
import { NewMessageFormType } from "./Dialogs";

let maxLength5 = maxLengthValidate(50)
// type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormType, string>
type PropsType = {}

let DialogForm : React.FC<InjectedFormProps<NewMessageFormType, PropsType> & PropsType>  = (props: any) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'dialogText'} component={TextArea} validate={[required, maxLength5]}></Field>
        </div>
        <div>
            <button type={'submit'}>Add message</button>
        </div>
    </form>)
}

export default reduxForm<NewMessageFormType>({
    form: 'dialog'
})(DialogForm)
