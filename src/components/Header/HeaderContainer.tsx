import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from 'react-redux';
import {rootReducerType} from "../../redux/reduxStore";
import {profileAuthTC, setAuthUserData} from "../../redux/authReducer";


export type PropsType = MapDispatchToPropsType & MapStateToPropsType
export type MapDispatchToPropsType = {
    setAuthUserData: (id: null, email: null, login: null) => void
    profileAuthTC: () => void
}
export type MapStateToPropsType = {
    isAuth: boolean,
    login: null,
    email: null,
    password: null
}

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        // authApi.profileAuth()
        //     .then(res => {
        //         if (res.data.resultCode === 0) {
        //             let {id, email, login} = res.data.data
        //             // @ts-ignore
        //             this.props.setAuthUserData(id, email, login)
        //         }
        //     })
        this.props.profileAuthTC()

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
        login: state.authorization.login,
    }
}
export default connect(MapStateToProps, {setAuthUserData, profileAuthTC})(HeaderContainer);
