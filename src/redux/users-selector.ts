import { StateType } from "./redux-store";

export let getUsersItem = (state: StateType) => {
    return state.usersPage.items
}
export let getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}
export let getFilter = (state: StateType) => {
    return state.usersPage.filter
}

export let getTotalUserCount = (state: StateType) => {
    return state.usersPage.totalUserCount
}

export let getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}

export let getIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}

export let getFollowingProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}

