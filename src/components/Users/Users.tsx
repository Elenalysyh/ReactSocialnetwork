import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import Loader from "../common/Loader";
import Paginator from "../common/Paginator";
import {UserType} from "../../types/types";
import UsersSearchForm from "./UsersSearchForm"
import {FilterType} from "../../redux/users-reducer";

type PropsType = {
    isFetching: boolean,
    items: Array<UserType>,
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    followingInProgressNow: (isFollowing: boolean, userId: number) => void,
    followingInProgress: Array<number>
}
type PaginatorType = {
    totalUserCount: number,
    pageSize: number,
    onFilterChanged: (filter: FilterType) => void,
    onPageChanged: (page: number) => void,
    currentPage: number
};

let Users : React.FC<PropsType & PaginatorType> = ({isFetching, totalUserCount ,pageSize, currentPage ,onPageChanged , onFilterChanged,items, follow, unfollow, followingInProgressNow, followingInProgress}) => {

    return (<div>
        {isFetching ?  <Loader/>: '' }
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
                         id={item.id}
                         // @ts-ignore
                         follow={follow}
                // @ts-ignore
                         unfollow={unfollow}
                         followingInProgressNow = {followingInProgressNow}
                         followingInProgress = {followingInProgress}/>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}


export default Users