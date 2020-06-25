import React from "react";
import {Field, reduxForm} from "redux-form";


let LoginForm = (props) => {
    debugger
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} component={'input'} name={'login'}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={'input'} name={'password'}/>
        </div>
        <div>
            <Field  component='input' type={'checkbox'} placeholder={'Login'}/>
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