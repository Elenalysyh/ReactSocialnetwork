import React from "react";
import style from "./User.module.css"

const User = (props) => {
    let userId = props.id
    let followUser = () => {
        props.follow(userId)
    }
    let unfollowUser = () => {
        props.unfollow(userId)
    }

    return (<div className={style.userWrapper} key={props.id}>
        <div className={style.ava}>
            <img src={props.photos.small}/>
        </div>
        <div>
            <div>{props.name}</div>
            <div>{props.status}</div>
            {props.followed
                ?  <button className={style.buttonFollow} onClick={unfollowUser}>Unfollow</button>
                : <button className={style.buttonFollow} onClick={followUser}>Follow</button>
            }
       </div>
    </div>)
}

export default User