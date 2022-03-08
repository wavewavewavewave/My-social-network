import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {rootReducerType} from "../redux/reduxStore";
import {connect} from "react-redux";

type MapStateToPropsType = {
    isAuth: boolean,
}

let mapStateToPropsForRedirect = (state: rootReducerType): MapStateToPropsType => ({
    isAuth: state.authorization.isAuth
})

export function AuthRedirect<T>(Component: ComponentType<T>) {
    // class RedirectComponent extends React.Component {
    //     render() {
    //         if(this.props.isAuth === false) return <Redirect to={'/login'}/>
    //         return <Component />;
    //     }
    // }
    const RedirectComponent = (props: MapStateToPropsType) => {
        let {isAuth, ...restProps} = props

        if(!isAuth) return <Redirect to={'/login'}/>

        return <Component {...restProps as T}/>
    }
   let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect) (RedirectComponent)

    return ConnectedAuthRedirectComponent
}