import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import {addPostAC, onChangePostAC} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
let postsElements = props.profilePage.myposts.map(item => <Post kye={item.id} src={item.src} text={item.text}></Post>)
    let newPostElement = React.createRef()

    let addPost = () => {
        props.dispatch(addPostAC())
    }
    let onChangePost = () => {
       props.dispatch(onChangePostAC(newPostElement.current.value))
    }

    return (
        <div className={style.posts}>My post
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onChangePost} value={props.profilePage.newPostElement}></textarea>
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
