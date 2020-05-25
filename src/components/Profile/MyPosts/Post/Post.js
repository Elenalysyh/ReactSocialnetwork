import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
    return (
        <li className={style.item}>
            <img src={props.src}/>
            <span>{props.text}</span>
        </li>
    )
}

export default Post