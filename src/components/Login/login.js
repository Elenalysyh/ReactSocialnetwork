import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect} from "react-redux";
import {loginT, loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css"

let maxLength5 = maxLengthValidate(25)
let LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Email'} component={Input} name={'email'} validate={[required, maxLength5]}/>
        </div>
        <div>
            <Field placeholder={'Password'} component={Input} type={'password'} name={'password'} validate={[required, maxLength5]}/>
        </div>
        {/*<div>*/}
        {/*    <Field  component='input' type={'checkbox'} placeholder={'Remember me'} />*/}
        {/*</div>*/}
        {props.error &&  <div className={style.formSumaryError}>
            {props.error}
        </div>}
        <div>
            {props.getCapture &&
                <div>
                    <img src={props.getCapture} />
                    <Field placeholder={'captcha'} component={Input} name={"captcha"} validate={[required]}/>
                </div>
            }
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>)
}

let LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let Login = (props) => {
    const OnSubmit = (data) => {
        props.loginThunk(data.email, data.password, true, data.captcha)
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={OnSubmit} getCapture={props.getCapture}/>
    </div>)
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        getCapture: state.auth.getCapture
    }
}

export default connect(mapStateToProps, {loginThunk})(Login)