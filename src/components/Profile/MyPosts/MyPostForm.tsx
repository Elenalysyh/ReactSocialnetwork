import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../../utils/validators";
import {TextArea} from "../../common/FormControls/FormControls";
import {ProfileInfoType} from "../../../types/types";
import exp from "constants";

let maxLength5 = maxLengthValidate(5)

type PropsType = {

}
export type AddPostFormValuesType = {
    mypost: string
}

let MyPostForm : React.FC<InjectedFormProps<AddPostFormValuesType, PropsType> & PropsType> = (props) => {
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

let LoginReduxForm = reduxForm<AddPostFormValuesType,PropsType>({
    form: 'mypost'
})(MyPostForm)

export default  LoginReduxForm