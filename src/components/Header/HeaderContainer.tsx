import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {rootReducerType} from "../../redux/reduxStore";
import {setAuthUserData} from "../../redux/authReducer";

export type PropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapDispatchToPropsType = {
    setAuthUserData: (id: null, email: null, login: null) => void
}
export type MapStateToPropsType = {
    isAuth: boolean,
    login: null,
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0//auth/me', {
            withCredentials: true,
        })
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, email, login} = res.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const MapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        isAuth: state.authorization.isAuth,
        login: state.authorization.login
    }
}
export default connect(MapStateToProps, {setAuthUserData})(HeaderContainer);
