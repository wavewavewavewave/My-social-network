import React, {ComponentType} from 'react';
import {rootReducerType} from "../redux/reduxStore";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";


type MapStateToPropsType = {
    isAuth: boolean,
}

let mapStateToPropsForRedirect = (state: rootReducerType): MapStateToPropsType => ({
    isAuth: state.authorization.isAuth
})

export function AuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }
    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}