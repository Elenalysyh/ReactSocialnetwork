import React from "react";
import {useSelector} from "react-redux";
import {Users} from "./Users"
import {getIsFetching} from "../../redux/users-selector";
import Loader from "../common/Loader";

type UserPagePropsType = {
    pageTitle: string

}
const UsersPage: React.FC<UserPagePropsType> = (props)=> {
    const isFetching = useSelector(getIsFetching)
    return (
        <>
            <h2>{props.pageTitle}</h2>
            {isFetching? <Loader/> : null}
            <Users />
        </>
    )
}

export default UsersPage

