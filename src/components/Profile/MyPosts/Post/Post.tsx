import React from "react";
import style from "./Post.module.css";

type PropsType = {
    text: string
}

const Post : React.FC<PropsType> = (props) => {

    return (
        <li className={style.item}>
            <img src="https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" alt={"Avatar"}/>
            <span>{props.text}</span>
        </li>
    )
}

export default Post