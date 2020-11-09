import {Field, Formik} from "formik";
import React from "react";
import { FilterType } from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";

const usersSearchFormValidate = (values: any) => {
    const errors = {};
    return errors;
}

type UsersSearchFormObjectType = {
    term: string
}
type PropsType = {
    onFilterChanged: (filter: FilterType) => void
}

type FriendFormType = "true" | "false" | "null"
type FormType = {
    term: string
    friend: FriendFormType
}
const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {

    const filter = useSelector((state: StateType) => {
        return state.usersPage.filter
    })

    const submit = (values: FormType, { setSubmitting} : {setSubmitting : (isSubmitting: boolean)=> void}) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === "null" ? null : values.friend === "true" ? true : false
        }
        debugger;
        onFilterChanged(filter);
        setSubmitting(false);
    }
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ term: filter.term, friend: String(filter.friend) as FriendFormType}}
                validate={usersSearchFormValidate}
                onSubmit={submit}
            >
        {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
        }) => (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="term"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.term}
            />
            {errors.term && touched.term && errors.term}

            <Field as="select" name="friend">
                <option value="null">All</option>
                <option value="true">followed</option>
                <option value="false">unfollowed</option>
            </Field>
        <button type="submit" disabled={isSubmitting}>
            Submit
        </button>
        </form>
)}
    </Formik>
    </div>
)
})

export default UsersSearchForm
