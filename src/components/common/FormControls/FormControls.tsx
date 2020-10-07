import React from "react";
import style from "./FormControls.module.css"
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form";

type FormControlsPropsType = {
    meta  : WrappedFieldMetaProps
}

let FormControl: React.FC<FormControlsPropsType & WrappedFieldProps> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return ( <div className={style.formControl + ' ' + (hasError? style.error: '')}>
        {props.children}
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>)
}
export let TextArea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return ( <FormControl {...props}> <textarea {...input} {...restProps} ></textarea></FormControl>)
}

export let Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, ...restProps} = props
    return ( <FormControl {...props}> <input {...input} {...restProps} ></input></FormControl>)
}