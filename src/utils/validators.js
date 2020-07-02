import React from "react";

export let required = (value) => {
    if(value) return undefined
    return 'Required'
}

export let maxLengthValidate = (maxLength) => {
    return (value) => {
    if(value.length > maxLength) return `Max length ${maxLength}`
    return undefined
}}