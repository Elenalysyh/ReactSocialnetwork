import React, {useState} from "react";
import Loader from "../../common/Loader";
import style from "./ProfileInfo.module.css"
import avatarDefault from "./../../../assets/images/flamingo.jpg"
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormControls/FormControls";
import {required} from "../../../utils/validators";

const ProfileInfo = (props) => {

    const [editMode, setEditMode] = useState();

    if(!props.profile) {
        return <Loader></Loader>
    }
    const saveFile = (e) => {
        if(e.target.files.length) {
            props.saveAvatarPhoto(e.target.files[0])
        }
    }
    const onSubmit = (info)=> {
        props.saveProfile(info)
        setEditMode(false)
    }

    return (
        <div className={style.profileContainer}>
            <img src={ props.profile.photos.large || avatarDefault}/>
            {props.isOwner && <input type='file' onChange={saveFile}/>}
            {editMode
                ? <ProfileFormRedux
                    initialValues={props.profile}
                    profile = {props.profile}
                    onSubmit={onSubmit}/>
                : <ProfileData goToEditData={()=>{ setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}


            <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}></ProfileStatusWithHook>
        </div>
    )
}

let Contact = (props) => {
    return (
        <div><b>{props.contactInfo}</b> {props.info || "Empty"}</div>
    )
}

let ProfileForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={()=>{}}>Save</button>
            </div>
            <div>
                <b>Looking for a job:</b>

                <Field placeholder={'Looking For a job'} type={"checkbox"} component={Input} name={'lookingForAJob'}/>
            </div>
            <div>
                <b>Job Description</b>
                <Field placeholder={'Looking For a job description'} component={TextArea} name={'lookingForAJobDescription'}/>
            </div>

            <div>
                <b>Full name</b>
                <Field placeholder={'Full name'} component={TextArea} name={'fullName'}/>
            </div>
            <div>
                <b>About me</b>
                <Field placeholder={'About me'} component={TextArea} name={'aboutMe'}/>
            </div>

            <div>Contact:
                <ul>
                    {Object.keys(props.profile.contacts).map((contactInfo, index, arr) =>

                        <li kye={contactInfo}>
                            <span> {contactInfo}  </span>
                            <Field placeholder={contactInfo} component={Input} name={'contacts.' + contactInfo}/>
                        </li>
                       )}

                </ul>
            </div>
        </form>
    )
}

let ProfileFormRedux = reduxForm({
    form: 'profile'
})(ProfileForm)

let ProfileData = (props) => {
    return (
        <div>
            <div>
                {props.isOwner && <button onClick={props.goToEditData}>Edit Profile</button>}

            </div>
            <div>
                <b>About me:</b> {props.profile.aboutMe}
            </div>
            <div>
                <b>Looking for a job:</b> {props.profile.lookingForAJob ? "yes": "no"}
            </div>
            <div>
                <b>Job Description</b> {props.profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Full name</b> {props.profile.fullName}
            </div>
            <div>Contact:
                <ul>
                    {Object.keys(props.profile.contacts).map(contactInfo =>
                        <Contact contactInfo={contactInfo} info={props.profile.contacts[contactInfo]} kye={contactInfo}/>)}

                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo
