import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";
import {rootReducerType} from "../../redux/reduxStore";
import {UserType} from "../../redux/usersReducer";

type mapStateToPropsType = {
    usersPage: Array<UserType>
}

let mapStateToProps = (state: rootReducerType): mapStateToPropsType => {
    return {
        usersPage: state.usersPage.users,
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {

    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)