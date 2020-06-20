import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser, usersAPI} from "../../../api/api";
import {followingInProgressNow} from "../../../redux/users-reducer";

const User = (props) => {

    return (<div className={style.userWrapper} key={props.id}>
        <div className={style.ava}>
           <NavLink to={`/profile/${props.id}`}>
               <img src={props.photos.small}/>
           </NavLink>
        </div>
        <div>
            <div>{props.name}</div>
            <div>{props.status}</div>
            {props.followed
                ?  <button disabled={props.followingInProgress.some((idUser)=>idUser === props.id)} className={style.buttonFollow} onClick={()=>{
                    props.unfollow(props.id)
                }}

                >Unfollow</button>
                : <button disabled={props.followingInProgress.some((idUser)=>idUser === props.id)} className={style.buttonFollow} onClick={()=>{
                   props.follow(props.id)
                }}>Follow</button>
            }
       </div>
    </div>)
}

export default User