import React from "react";
import style from "./Post.module.css";

const Post = (props) => {

    return (
        <li className={style.item}>
            <img src="https://logosrated.net/wp-content/uploads/parser/LOGO-1.png"/>
            <span>{props.text}</span>
        </li>
    )
}

export default Post