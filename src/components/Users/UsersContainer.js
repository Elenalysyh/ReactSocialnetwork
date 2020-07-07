import React from "react";
import {connect} from "react-redux";
import {unfollow, follow, setUsers, isFetchingNow} from "./../../redux/users-reducer"
import {
    setCurrentPage,
    finishFetching,
    setTotalCount,
    followingInProgress,
    followingInProgressNow, getUsersThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import { usersAPI} from "../../api/api";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersItem
} from "../../redux/users-selector";

class  UsersContainer extends React.Component{

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsersThunk(page, this.props.pageSize)
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
                      unfollow={this.props.unfollow}
                      isFetching={ this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      followingInProgressNow = {this.props.followingInProgressNow}/> )
    }
}

let mapStateToProps = (state) => {

    return {
        items: getUsersItem(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalCount,isFetchingNow,
    finishFetching, followingInProgressNow, getUsersThunk
})(UsersContainer)
