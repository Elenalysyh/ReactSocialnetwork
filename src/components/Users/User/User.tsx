import React from "react";
import style from "./User.module.css"
import {NavLink} from "react-router-dom";
import {UserType} from "../../../types/types";

type PropsType = {
    followingInProgress: Array<number>,
    followingInProgressNow: (isFollowing: boolean, userId: number) => void
    unfollow: (userId: number) => void,
    follow:  (userId: number) => void,
    id: number
}
const User: React.FC<PropsType & UserType> = (props) => {

    return (<div className={style.userWrapper} key={props.id}>
        <div className={style.ava}>
           <NavLink to={`/profile/${props.id}`}>
               {/*@ts-ignore*/}
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