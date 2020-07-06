import React from "react";
import style from "./FormControls.module.css"

let FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return ( <div className={style.formControl + ' ' + (hasError? style.error: '')}>
        {props.children}
        <div>
            {hasError && <span>{meta.error}</span>}
        </div>
    </div>)
}
export let TextArea = (props) => {
    const {input, meta, child, ...restProps} = props
    return ( <FormControl {...props}> <textarea {...input} {...restProps} ></textarea></FormControl>)
}

export let Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return ( <FormControl {...props}> <input {...input} {...restProps} ></input></FormControl>)
}
