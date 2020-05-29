import React from "react";
import User from "./User/User";
import style from "./Users.module.css"


let Users = (props) => {
    if(props.items.length === 0 ) {
        props.setUsers([
            {
                "name": "Shubert",
                "id": 1,
                "photos": {
                    "small": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg",
                    "large": null
                },
                "status": null,
                "followed": false
            },
            {
                "name": "Hacker",
                "id": 2,
                "photos": {
                    "small": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Pic-vk-allaboutme-ava-2.jpg",
                    "large": null
                },
                "status": null,
                "followed": true
            }
        ])
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