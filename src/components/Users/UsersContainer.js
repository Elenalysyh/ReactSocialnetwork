import React from "react";
import {connect} from "react-redux";
import {unfollow, follow, setUsers, isFetchingNow} from "./../../redux/users-reducer"
import {setCurrentPage, finishFetching, setTotalCount} from "../../redux/users-reducer";
import Users from "./Users";
import { usersAPI} from "../../api/api";

class  UsersContainer extends React.Component{

    componentDidMount() {
        this.props.isFetchingNow()
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data=>{
            this.props.setUsers(data.items)
            this.props.setTotalCount(data.totalCount)})
            this.props.finishFetching()

    }

    onPageChanged = (page) => {
        this.props.isFetchingNow()
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize).then(data=>{
            this.props.finishFetching()
            this.props.setUsers(data.items)})
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
                      isFetching={ this.props.isFetching}/> )
    }
}

let mapStateToProps = (state) => {

    return {
        items: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers,
    setCurrentPage, setTotalCount,isFetchingNow,
    finishFetching
})(UsersContainer)
