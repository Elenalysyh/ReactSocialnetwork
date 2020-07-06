import React from "react";
import * as axios from "axios";

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
    followUser(id) {
        return instance.post(`/follow/${id}`).then(response => (response.data))
    },
    unfollowUser(id) {
        return instance.delete(`/follow/${id}`)
            .then(response => (response.data))
    }
}


export let authAPI = {
    authMe() { return  instance.get(`/auth/me`).then(response => (response.data))},
    login(email, password, rememberme) {
        return instance.post('/auth/login', {email, password, rememberme})},
    logout () {
        return instance.delete('/auth/login')}

}


export let profileAPI = {
    getUserProfile (userId) {
        return instance.get(`/profile/${userId}`).then(response => (response.data))
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`/profile/status`,{status})
    }
}

