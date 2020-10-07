import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../../utils/validators";
import {TextArea} from "../../common/FormControls/FormControls";
import {ProfileInfoType} from "../../../types/types";

let maxLength5 = maxLengthValidate(5)

type PropsType = {
    handleSubmit: () => void
}
let MyPostForm : React.FC<PropsType> = (props) => {
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
    // @ts-ignore
})(MyPostForm)

export default  LoginReduxForm