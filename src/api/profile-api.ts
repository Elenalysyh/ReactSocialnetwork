import {ProfileType} from "../types/types";
import {instance, ResponseType} from "./api";

type ProfilePhotoDataPut = {
    small: string
    large: string
}

export let profileAPI = {
    getUserProfile(userId: number | null) {
        return instance.get<ProfileType>(`/profile/${userId}`).then(response => (response.data))
    },
    getStatus(userId: number) {
        return instance.get<string>(`/profile/status/${userId}`).then(response => (response.data))
    },
    updateStatus(status: string) {
        return instance.put<ResponseType>(`/profile/status`, {status}).then(response => (response.data))
    },
    savePhoto(photo: any) {
        const formData = new FormData();
        formData.append("image", photo);

        return instance.post<ResponseType<ProfilePhotoDataPut>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(response => (response.data))
    },
    saveProfile(profile: ProfileType) {
        return instance.put<ResponseType>(`/profile`, {...profile})
    }
}