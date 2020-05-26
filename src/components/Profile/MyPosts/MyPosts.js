import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = (props) => {
let postsElements = props.profilePage.myposts.map(item => <Post kye={item.id} src={item.src} text={item.text}></Post>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }
    let onChangePost = () => {
        props.onChangeMyPost(newPostElement.current.value)
    }

    return (
        <div className={style.posts}>My post
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePost} value={props.newPostElement}></textarea>
                </div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
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
