import {instance, ResponseType, ResultCodeLoginEnum, ResultCodeWithCaptcha} from "./api";


export type PostType = {
    userId: number
}

export type AuthMeDataType = {
    id: number,
    email: string,
    login: string
}
export type AuthMeType = ResponseType<AuthMeDataType>

type PostDataType = ResponseType<PostType,ResultCodeWithCaptcha & ResultCodeLoginEnum>

export let authAPI = {
    authMe() {
        return instance.get<AuthMeType>(`/auth/me`).then(response => (response.data))
    },
    login(email: string | null, password: string | null, rememberme: boolean, captcha: null | string) {
        return instance.post<PostDataType>('/auth/login', {
            email,
            password,
            rememberme,
            captcha
        }).then(response => response.data)
    },
    logout() {
        return instance.delete('/auth/login').then(response => response.data)
    }

}