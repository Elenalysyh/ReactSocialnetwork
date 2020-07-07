import React from "react";

export let getUsersItem = (state) => {
    return state.usersPage.items
}
export let getPageSize = (state) => {
    return state.usersPage.pageSize
}

export let getTotalUserCount = (state) => {
    return state.usersPage.totalUserCount
}

export let getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export let getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export let getFollowingProgress = (state) => {
    return state.usersPage.followingInProgress
}

