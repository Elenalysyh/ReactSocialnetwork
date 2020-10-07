import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {PostsType} from "../../../types/types";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    myposts: Array<PostsType>
}
const mapStateToProps = (state: StateType) : MapStateToPropsType => {
    return {
        myposts: state.profilePage.myposts
    }
}

const mapDispatchToProps = (dispatch : Dispatch) => {
    return {
        addPost: (mypost: string) => {
            dispatch(addPostAC(mypost))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer
