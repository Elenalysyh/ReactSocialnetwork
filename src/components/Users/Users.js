import React from "react";
import style from "./Users.module.css";
import User from "./User/User";

let Users = ({pages , currentPage ,onPageChanged,items, follow, unfollow}) => {
debugger
    return (<div>

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
                         unfollow={unfollow}></User>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}

export default Users