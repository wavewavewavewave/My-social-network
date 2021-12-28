import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {rootReducerType} from "../../redux/reduxStore";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCounterAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import UserClass from "./UserClass";

type mapStateToPropsType = {
    usersPage: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,

}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCounter: (totalUsersCounter: number) => void,
}

let mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCounter: (totalUsersCount: number) => {
            dispatch(setTotalUsersCounterAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserClass)