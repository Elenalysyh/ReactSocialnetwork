import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    let posts = [{src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Some text"},
        {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Lorem imsum "},
        {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Hello "},
        {src: "https://logosrated.net/wp-content/uploads/parser/LOGO-1.png" , text: "Sounds good"},]
    return (
        <div className={style.posts}>My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div><button>Add post</button></div>
            </div>
            <div>
                <p>My posts</p>
                <ul className={style.items}>
                    {posts.map(item => <Post src={item.src} text={item.text}></Post>)}
                </ul>
            </div>
        </div>
    )
}

export default MyPosts
