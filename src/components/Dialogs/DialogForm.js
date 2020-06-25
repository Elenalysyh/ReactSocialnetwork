import React from "react";
import {Field, reduxForm} from "redux-form";

let DialogForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'dialogText'} component={'textarea'}></Field>
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