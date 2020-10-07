import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import MyPostForm from "./MyPostForm";
import {PostsType} from "../../../types/types";


type PropsType = {
    myposts: Array<PostsType>
    addPost: (data: string) => void
}
const MyPosts : React.FC<PropsType>  = (props) => {
//@ts-ignore
    let postsElements = props.myposts.map(item =>( <Post kye={item.id} text={item.text}></Post>))

    let addPost = (data: any) => {
        props.addPost(data.mypost)
    }

    return (
        <div className={style.posts}>My post
            <MyPostForm onSubmit={addPost}></MyPostForm>
            <div>
                <p>My posts</p>
                <ul className={style.items}>
                    {postsElements}
               </ul>
            </div>
        </div>
    )
}

export default MyPosts
