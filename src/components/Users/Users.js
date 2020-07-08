import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import Loader from "../common/Loader";
import Paginator from "../common/Paginator";

let Users = ({isFetching, totalUserCount ,pageSize, currentPage ,onPageChanged,items, follow, unfollow, followingInProgressNow, followingInProgress}) => {

    return (<div>
        {isFetching ?  <Loader/>: '' }

        <Paginator totalUserCount={totalUserCount}
                   pageSize = {pageSize}
                   currentPage={currentPage}
                   onPageChanged={onPageChanged}/>

        {items.map((item)=>{
            return <User name={item.name}
                         photos={item.photos}
                         followed={item.followed}
                         key={item.id}
                         follow={follow}
                         id={item.id}
                         unfollow={unfollow}
                         followingInProgressNow = {followingInProgressNow}
                         followingInProgress = {followingInProgress}/>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}

export default Users