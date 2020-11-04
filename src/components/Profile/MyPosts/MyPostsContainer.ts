import {actions} from "../../../redux/profile-reducer";
import MyPosts, {DispatchPropsType, MapPropsType} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {PostsType} from "../../../types/types";
import {Dispatch} from "redux";


const mapStateToProps = (state: StateType)  => {
    return {
        myposts: state.profilePage.myposts
    } as MapPropsType
}

const MyPostsContainer = connect<MapPropsType, DispatchPropsType, {}, StateType>(mapStateToProps, {
    addPost: actions.addPostAC
})(MyPosts)

export default MyPostsContainer
