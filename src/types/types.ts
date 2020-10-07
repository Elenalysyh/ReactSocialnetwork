import {FormSubmitHandler} from "redux-form";

export type PostsType = {
    text: string
    id: number
    likesCount: number
    src: string
}

export type PhotosType = {
    small: string | null
    large: string | null
}

export type ContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts : ContactsType
    photos: PhotosType
    aboutMe: string
}

export type ProfileInfoType = {
    profile: ProfileType
    saveAvatarPhoto: (target: string) => void
    saveProfile: (info: FormSubmitHandler) => void
    updateUserStatus: () => void
    isOwner: boolean
    status: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

