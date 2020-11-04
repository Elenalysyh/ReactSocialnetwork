import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"
import MyPostForm, {AddPostFormValuesType} from "./MyPostForm";
import {PostsType} from "../../../types/types";


export type MapPropsType = {
    myposts: Array<PostsType>
    addPost: (data: string) => void
}
export type DispatchPropsType = {
    addPost: (data: string) => void
}

type PropsType = MapPropsType & DispatchPropsType

const MyPosts : React.FC<PropsType>  = (props) => {
//@ts-ignore
    let postsElements = props.myposts.map(item =>( <Post kye={item.id} text={item.text}></Post>))

    let addPost = (data: AddPostFormValuesType) => {
        props.addPost(data.mypost)
    }

    return (
        <div className={style.posts}>My post
            <MyPostForm onSubmit={addPost}/>
            <div>
                <p>My posts</p>
                <ul className={style.items}>
                    {postsElements}
               </ul>
            </div>
        </div>
    )
}

const MyPostsMemorized = React.memo(MyPosts)

export default MyPostsMemorized
