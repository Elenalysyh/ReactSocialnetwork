import {instance} from "./api";

type SecurityApiType = {
    url: string
}
export let securityApi = {
    getCaptureUrl() {
        return instance.get<SecurityApiType>(`/security/get-captcha-url`).then(response => (response.data))
    }
}