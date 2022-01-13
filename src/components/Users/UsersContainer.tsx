import React from 'react';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import s from '../Users/Preloader.module.css'
import {rootReducerType} from "../../redux/reduxStore";
import userPhoto from "../../assets/image/220px-User_icon_2.svg.png";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCounterAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/usersReducer";
import axios from "axios";
import {Users} from "./Users";


type UsersContType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCounter: (totalUsersCount: number) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

type mapStateToPropsType = {
    usersPage: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCounter: (totalUsersCount: number) => void,
}

class UserAPIComponent extends React.Component<UsersContType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCounter(res.data.totalCount)
        });
    }

    setCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(res => {
            this.props.setUsers(res.data.items)
        });
    }

    render() {

        return <>
            <div className={s.circle}>
                {this.props.isFetching}
            </div>
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPageHandler={this.setCurrentPageHandler}
                   unFollow={this.props.unFollow}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   userPhoto={userPhoto}
            />
        </>
    }
}

let mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserAPIComponent)