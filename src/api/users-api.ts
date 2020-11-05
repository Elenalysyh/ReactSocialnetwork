import {ResponseType, GetUserItemsType, instance} from "./api";


export let usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term="", friend: null| boolean = null) {
        return instance.get<GetUserItemsType>(`/users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend === null ? '':`&friend=${friend}`))
            .then(response => (response.data))
    },
    followUser(id: number) {
        return instance.post<ResponseType>(`/follow/${id}`)
            .then(response => (response.data))
    },
    unfollowUser(id: number) {
        return instance.delete(`/follow/${id}`)
            .then(response => (response.data)) as Promise<ResponseType>
    }
}