import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthValidate, required} from "../../utils/validators";
import {Input} from "../common/FormControls/FormControls";
import {connect, useDispatch, useSelector} from "react-redux";
import {loginThunk} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormControls/FormControls.module.css"
import {StateType} from "../../redux/redux-store";

let maxLength5 = maxLengthValidate(25)

type FormDataValueType = {
    email: string
    password: string
    rememberme: boolean
    captcha: string
}
type LoginOwnPropType = {
    getCapture: string | null
}

let LoginForm : React.FC<InjectedFormProps<FormDataValueType, LoginOwnPropType> & LoginOwnPropType> = (props) => {
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

let LoginReduxForm = reduxForm<FormDataValueType, LoginOwnPropType>({
    form: 'login'
})(LoginForm)

export const Login: React.FC = (props) => {
    const getCapture = useSelector((state:StateType)=> state.auth.getCapture)
    const isAuth = useSelector((state: StateType) => state.auth.isAuth)

    const dispatch = useDispatch();
    const OnSubmit = (data: any) => {
        dispatch(loginThunk(data.email, data.password, true, data.captcha))
    }

    if(isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (<div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={OnSubmit} getCapture={getCapture}/>
    </div>)
}
