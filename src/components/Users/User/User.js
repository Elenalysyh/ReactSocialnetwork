import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import {followUser, unfollowUser, usersAPI} from "../../../api/api";

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
                ?  <button className={style.buttonFollow} onClick={()=>{
                    usersAPI.unfollowUser(props.id).then(data=>{
                        if(data.resultCode === 0) {
                            props.unfollow(props.id)
                        }
                    })
                }}

                >Unfollow</button>
                : <button className={style.buttonFollow} onClick={()=>{

                    usersAPI.followUser(props.id).then(data=>{
                        if(data.resultCode === 0) {
                            props.follow(props.id)
                         }
                    })
                }}>Follow</button>
            }
       </div>
    </div>)
}

export default User