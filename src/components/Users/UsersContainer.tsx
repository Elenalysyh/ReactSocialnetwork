import React from "react";
import {connect} from "react-redux";
import {unfollow, follow, FilterType} from "../../redux/users-reducer"
import {
    setCurrentPage,
    followingInProgressNow, getUsersThunk
} from "../../redux/users-reducer";
import Users from "./Users";
import {
    getCurrentPage,
    getFilter,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUsersItem
} from "../../redux/users-selector";
import {UserType} from "../../types/types";
import { StateType } from "../../redux/redux-store";
import { compose } from "redux";

type PropsType = {
    pageTitle: string
}

type MapStateToPropsType = {
    currentPage: number,
    pageSize: number,
    totalUserCount: number,
    items: Array<UserType>,
    followingInProgress: Array<number>,
    isFetching: boolean,
    filter: FilterType
}
type MapDispatchToPropsType = {
    getUsersThunk: (currentPage: number, pageSize: number, filter: FilterType)=> void
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (page: number) => void
    followingInProgressNow: (isFollowing: boolean, userId: number) => void
}

type Props = MapStateToPropsType & MapDispatchToPropsType & PropsType

class UsersContainer extends React.Component<Props> {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize, this.props.filter)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        const {filter} = this.props
        this.props.getUsersThunk(pageNumber, this.props.pageSize, filter)
    }

    onFilterChanged = (filter: FilterType) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(1, pageSize, filter)
    }

    render() {

        return(<Users totalUserCount={this.props.totalUserCount}
                      pageSize = {this.props.pageSize}
                      currentPage={this.props.currentPage}
                      items = {this.props.items}
                      follow = {this.props.follow}
                      onFilterChanged = {this.onFilterChanged}
                      unfollow={this.props.unfollow}
                      isFetching={ this.props.isFetching}
                      followingInProgress={this.props.followingInProgress}
                      followingInProgressNow = {this.props.followingInProgressNow}
                      onPageChanged={this.onPageChanged}
                    />
        )
    }
}

let mapStateToProps = (state: StateType): MapStateToPropsType => {

    return {
        items: getUsersItem(state),
        pageSize: getPageSize(state),
        filter: getFilter(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
}

export default compose(
    connect<MapStateToPropsType, MapDispatchToPropsType, PropsType, StateType>(mapStateToProps, {
    follow, unfollow,
    setCurrentPage,
    followingInProgressNow, getUsersThunk
}))(UsersContainer)
