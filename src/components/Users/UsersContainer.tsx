import React from 'react';
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/reduxStore";
import userPhoto from "../../assets/image/220px-User_icon_2.svg.png";
import {
    follow, setCurrentPage, setToggleIsFetching, setTotalUsersCounter, setUsers, toggleFollowingInProgress, unFollow,
    UserType
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../Preloader/Preloader.";
import {usersApi} from "../../api/social-network.";


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
    setToggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void,
    followingInProgress: string[],
}

type mapStateToPropsType = {
    usersPage: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: string[],
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCounter: (totalUsersCount: number) => void,
    setToggleIsFetching: (isFetching: boolean) => void,
    followingInProgress: (isFetching: boolean) => void,
}

class UserAPIComponent extends React.Component<UsersContType> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(res.data.items)
            this.props.setTotalUsersCounter(res.data.totalCount)
        });
    }
    setCurrentPageHandler = (pageNumber: number) => {
        this.props.setToggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(res => {
            this.props.setToggleIsFetching(false)
            this.props.setUsers(res.data.items)
        });
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   setCurrentPageHandler={this.setCurrentPageHandler}
                   unFollow={this.props.unFollow}
                   usersPage={this.props.usersPage}
                   follow={this.props.follow}
                   userPhoto={userPhoto}
                   toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                   followingInProgress={this.props.followingInProgress}
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
        followingInProgress: state.usersPage.toggleFollowingInProgress
    }
}
export const UsersContainer = connect(mapStateToProps,
    {
        follow,
        unFollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCounter,
        setToggleIsFetching,
        toggleFollowingInProgress,
    })(UserAPIComponent)