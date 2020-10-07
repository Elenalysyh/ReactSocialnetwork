
import axios from "axios";
import {ProfileType, UserType} from "../types/types";

let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "db84c711-7eda-4398-a5b4-4b40c6c9d105"
    }
})

export let usersAPI = {
    getUsers (currentPage = 1,pageSize = 10 ) {
        return instance.get(`/users?page=${currentPage}&count=${pageSize}`).then(response => (response.data))
    },
    followUser(id: number) {
        return instance.post<AuthMeType>(`/follow/${id}`).then(response => (response.data))
    },
    unfollowUser(id: number) {
        return instance.delete<AuthMeType>(`/follow/${id}`)
            .then(response => (response.data))
    }
}

type AuthMeType = {
    data: { id: number, email: string, login: string}
    resultCode: ResultCodeLoginEnum
    messages: Array<string>
}

export enum ResultCodeLoginEnum {
    Success= 0,
    Error= 1
}

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired=10
}

type PostDeleteType = {
    resultCode: ResultCodeLoginEnum | ResultCodeWithCaptcha
    messages: Array<string>
    data: { userId: number}
}

export let authAPI = {
    authMe() {
        return  instance.get<AuthMeType>(`/auth/me`).then(response => (response.data))
    },
    login(email: string | null, password: string | null, rememberme: boolean, captcha: null | string ) {
        return instance.post<PostDeleteType>('/auth/login', {email, password, rememberme, captcha}).
        then(response => response.data)
    },
    logout () {
        return instance.delete<PostDeleteType>('/auth/login').
        then(response => response.data)
    }

}

export let securityApi = {
    getCaptureUrl() {
        return  instance.get(`/security/get-captcha-url`).then(response => (response.data))}
}

type ProfilePhotoPut = {
    data: { small: string, large: string}
    resultCode: ResultCodeLoginEnum
    messages: Array<string>
}
export let profileAPI = {
    getUserProfile (userId: number | null) {
        return instance.get<ProfileType>(`/profile/${userId}`).then(response => (response.data))
    },
    getStatus(userId: number) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status: string){
        return instance.put<AuthMeType>(`/profile/status`,{status})
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.post<ProfilePhotoPut>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<AuthMeType>(`/profile`,{...profile})
    }
}

