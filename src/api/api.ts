import axios from "axios";
import {UserType} from "../types/types";

export const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "db84c711-7eda-4398-a5b4-4b40c6c9d105"
    }
})

export enum ResultCodeLoginEnum {
    Success= 0,
    Error= 1
}

export enum ResultCodeWithCaptcha {
    CaptchaIsRequired=10
}

export type ResponseType< D= {}, RC = ResultCodeLoginEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}

export type GetUserItemsType = {
    items: Array<UserType>
    totalCount: number
    error: string | null
}

