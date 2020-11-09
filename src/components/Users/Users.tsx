import React, {useEffect} from "react";
import style from "./Users.module.css";
import User from "./User/User";
import Paginator from "../common/Paginator";
import UsersSearchForm from "./UsersSearchForm"
import {FilterType, getUsersThunk, setCurrentPage} from "../../redux/users-reducer";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getFilter,
    getFollowingProgress,
    getPageSize,
    getTotalUserCount,
    getUsersItem
} from "../../redux/users-selector";

type PropsType = {
}

export const Users: React.FC<PropsType> = (props) => {

    const totalUserCount = useSelector(getTotalUserCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getFilter)
    const items = useSelector(getUsersItem)
    const followingInProgress = useSelector(getFollowingProgress)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersThunk(currentPage, pageSize,filter))

    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(setCurrentPage(pageNumber))
        dispatch(getUsersThunk(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(getUsersThunk(1, pageSize, filter))
    }

    const follow = (id: number) => {
        dispatch(follow(id))
    }
    const unfollow = (id: number) => {
        dispatch(unfollow(id))
    }

    const followingInProgressNow = (isFollowing: boolean, userId: number) => {
        dispatch(followingInProgressNow(isFollowing, userId))
    }

    return (<div>

        <UsersSearchForm onFilterChanged={onFilterChanged}/>
        <Paginator totalUserCount={totalUserCount}
                   pageSize = {pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>

        {items.map((item)=>{

            return <User name={item.name}
                         photos={item.photos}
                         followed={item.followed}
                         key={item.id}
                         status={item.status}
                         id={item.id}
                         follow={follow}
                         unfollow={unfollow}
                         followingInProgressNow = {followingInProgressNow}
                         followingInProgress = {followingInProgress}/>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}
