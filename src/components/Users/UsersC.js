import React from "react";
import User from "./User/User";
import style from "./Users.module.css"
import * as axios from "axios";


class UsersC extends React.Component{
    getUser = () => {
        if(this.props.items.length === 0 ) {
            debugger;
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
                console.log(response)
                this.props.setUsers(response.data.items)})
        }
    }

    render() {
        return(<div>
            {this.props.items.map((item)=>{
                return <User name={item.name}
                             photos={item.photos}
                             followed={item.followed}
                             key={item.id}
                             follow={this.props.follow}
                             id={item.id}
                             unfollow={this.props.unfollow}></User>
            })}
            <button className={style.showMoreButton} onClick={this.getUser}>Show more</button>
        </div>)
    }
}

export default UsersC