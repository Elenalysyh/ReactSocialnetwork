import React from "react";
import {connect} from "react-redux";
import {unfollowAC, followAC, setUsercAC} from "./../../redux/users-reducer"
import {currentPageAC, setTotalCountAC} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component{

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            console.log(response)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)})

    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=>{
            console.log(response)
            this.props.setUsers(response.data.items)})
    }

    render() {
        let paginationSize = Math.ceil(this.props.totalUserCount/this.props.pageSize)
        let pages = []
        for( let i=1; i<=paginationSize; i++) {
            pages.push(i)
        }

        return(<Users pages={pages}
                      currentPage={this.props.currentPage}
                      onPageChanged = {this.onPageChanged}
                      items = {this.props.items}
                      follow = {this.props.follow}
                      unfollow={this.props.unfollow}/> )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsercAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(currentPageAC(page))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
