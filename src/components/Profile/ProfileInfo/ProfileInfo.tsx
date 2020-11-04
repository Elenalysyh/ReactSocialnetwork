import React, {ChangeEvent, useState} from "react";
import Loader from "../../common/Loader";
import style from "./ProfileInfo.module.css"
import avatarDefault from "./../../../assets/images/flamingo.jpg"
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from "redux-form";
import {Input, TextArea} from "../../common/FormControls/FormControls";
import {ProfileInfoType, ProfileType} from "../../../types/types";

type PropsType = {
    profile: ProfileType | null
    status: string
    updateUserStatus: () => void
    isOwner: boolean
    saveAvatarPhoto: (file: File) => void
    saveProfile: (profile:ProfileType) => Promise<any>
}

const ProfileInfo: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>();

    if(!props.profile) {
        return <Loader></Loader>
    }
    const saveFile = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.length) {
            props.saveAvatarPhoto(e.target.files[0])
        }
    }
    const onSubmit = (info: ProfileType)=> {
        props.saveProfile(info).then(() => {
            setEditMode(false)
        })

    }

    return (
        <div className={style.profileContainer}>
            <img src={ props.profile.photos.large || avatarDefault}/>
            {props.isOwner && <input type='file' onChange={saveFile}/>}
            {editMode
                ? <ProfileFormRedux
                    initialValues={props.profile}
                 // @ts-ignore
                    profile = {props.profile}
                    onSubmit={onSubmit}/>
                : <ProfileData goToEditData={()=>{ setEditMode(true)}} profile={props.profile} isOwner={props.isOwner}/>}


            <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    )
}

type ContactType = {
    contactInfo: string
    info: string
}
let Contact: React.FC<ContactType> = (props) => {
    return (
        <div><b>{props.contactInfo}</b> {props.info || "Empty"}</div>
    )
}
type ProfileFormType = {
    profile: ProfileType
}

type FormProfileType = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
}

let ProfileForm: React.FC<InjectedFormProps<ProfileType,ProfileFormType> & ProfileFormType> = (props) => {
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
                    {Object.keys(props.profile.contacts).map((contactInfo) => {
                        return (
                            //@ts-ignore
                            <li kye={contactInfo}>
                                <span> {contactInfo}  </span>
                                <Field placeholder={contactInfo} component={Input} name={'contacts.' + contactInfo}/>
                            </li>
                        )
                      }
                    )}
                </ul>
            </div>
        </form>
    )
}



let ProfileFormRedux = reduxForm<ProfileType,ProfileFormType>({
    form: 'profile'
})(ProfileForm)

type ProfileDataType = {
    isOwner: boolean
    goToEditData: () => void
    profile: ProfileType
}

let ProfileData: React.FC<ProfileDataType> = (props) => {
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
                        // @ts-ignore
                        <Contact contactInfo={contactInfo} info={props.profile.contacts[contactInfo]} kye={contactInfo}/>)}

                </ul>
            </div>
        </div>
    )
}

export default ProfileInfo
