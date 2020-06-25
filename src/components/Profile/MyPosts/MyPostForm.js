import React from "react";
import {Field, reduxForm} from "redux-form";

let MyPostForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'mypost'}></Field>
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