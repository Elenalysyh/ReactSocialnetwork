import React from "react";
import {connect} from "react-redux";
import {unfollow, follow, setUsers, isFetchingNow} from "./../../redux/users-reducer"
import {setCurrentPage, finishFetching, setTotalCount} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class  UsersContainer extends React.Component{

    componentDidMount() {
        this.props.isFetchingNow()
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)})
            this.props.finishFetching()

    }

    onPageChanged = (page) => {
        this.props.isFetchingNow()
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response=>{
            console.log(response)
            this.props.finishFetching()
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
