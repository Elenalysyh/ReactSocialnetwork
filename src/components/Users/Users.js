import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import * as axios from "axios";


let Users = (props) => {
    if(props.items.length === 0 ) {
        debugger;
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
            console.log(response)
            props.setUsers(response.data.items)})
    }

    return(<div>
        {props.items.map((item)=>{
            return <User name={item.name}
                         photos={item.photos}
                         followed={item.followed}
                         key={item.id}
                         follow={props.follow}
                         id={item.id}
                         unfollow={props.unfollow}></User>
        })}
        <button className={style.showMoreButton}>Show more</button>
    </div>)
}

export default Users