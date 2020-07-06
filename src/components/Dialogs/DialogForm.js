import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../utils/validators";
import {TextArea} from "../common/FormControls/FormControls";

let maxLength5 = maxLengthValidate(5)
let DialogForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'dialogText'} component={TextArea} validate={[required, maxLength5]}></Field>
        </div>
        <div>
            <button type={'submit'}>Add message</button>
        </div>
    </form>)
}

DialogForm = reduxForm({
    form: 'dialog'
})(DialogForm)


export default DialogForm