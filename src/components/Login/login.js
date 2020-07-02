import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";

let maxLength5 = maxLengthValidate(5)
let LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} component={Input} name={'login'} validate={[required, maxLength5]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} name={'password'} validate={[required, maxLength5]}/>
        </div>
        <div>
            <Field  component='input' type={'checkbox'} placeholder={'Login'} />
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = () => {
    const OnSubmit = (data) => {
        console.log(data)
    }
    return (<div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={OnSubmit}></LoginReduxForm>
    </div>)
}

export default Login