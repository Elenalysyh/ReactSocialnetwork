import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import MyPostForm from "./MyPostForm";

const MyPosts = (props) => {

    let postsElements = props.myposts.map(item =>( <Post kye={item.id} text={item.text}></Post>))

    let addPost = (data) => {
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
