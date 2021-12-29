import React from 'react'
import userPhoto from "../../assets/image/220px-User_icon_2.svg.png";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";
import {Users} from "./Users";


type UsersType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCounter: (totalUsersCount: number) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
}

class UserAPIComponent extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCounter(response.data.totalUsersCount)
        });
    }

    setCurrentPageHandler = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {

        return (<Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       setCurrentPageHandler={this.setCurrentPageHandler}
                       unFollow={this.props.unFollow}
                       usersPage={this.props.usersPage}
                       follow={this.props.follow}
        />)
    }
}


export default UserAPIComponent;