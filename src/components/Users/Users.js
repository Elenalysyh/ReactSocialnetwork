import React from "react";
import style from "./Users.module.css";
import User from "./User/User";
import Loader from "../common/Loader";

let Users = ({isFetching, pages , currentPage ,onPageChanged,items, follow, unfollow, followingInProgressNow, followingInProgress}) => {

    return (<div>
        {isFetching ?  <Loader></Loader>: '' }

        {pages.map((p)=> {
            return <span className={currentPage === p ? style.selectedPage : ""}
                         onClick={()=> {onPageChanged(p)}}>{p}</span>
        })}
        {items.map((item)=>{
            return <User name={item.name}
                         photos={item.photos}
                         followed={item.followed}
                         key={item.id}
                         follow={follow}
                         id={item.id}
                         unfollow={unfollow}
                         followingInProgressNow = {followingInProgressNow}
                         followingInProgress = {followingInProgress}></User>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}

export default Users