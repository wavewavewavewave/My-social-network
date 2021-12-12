import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {rootReducerType} from "../../redux/reduxStore";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../redux/usersReducer";

type mapStateToPropsType = {
    usersPage: Array<UserType>
}
type mapDispatchToPropsType = {
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

let mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)