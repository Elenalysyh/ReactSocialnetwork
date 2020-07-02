import React from "react";
import styles from './FormsControls.module.css'
import {Field} from "redux-form";
import {requiredField} from "../../../utils/validators/validators";

const FormControl = ({input, meta: {touched, error }, children}) => {
    const hasError = touched && error;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>

            {hasError && <span> {error}</span>}
        </div>
    )
}

const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    )
}

export default Textarea

export  const createField = (placeholder, name, validate, component, props={}, text='') => {
    return   <div><Field placeholder={placeholder}
                         name={name}
                         component={component}
                         validate={validate}
                         {...props}
    />{text}</div>
}