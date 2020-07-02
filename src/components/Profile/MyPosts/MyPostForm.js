import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../../utils/validators";
import TextArea from "../../common/FormControls/FormControls";


let maxLength5 = maxLengthValidate(5)
let MyPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit} >
            <div>
                <Field component={TextArea} name={'mypost'} validate={[required, maxLength5]} placeholder={'Enter post'}></Field>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
    </form>
       )
}

let LoginReduxForm = reduxForm({
    form: 'mypost'
})(MyPostForm)

export default  LoginReduxForm