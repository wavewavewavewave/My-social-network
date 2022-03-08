import React from "react";
import {Content} from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {profileUserTC, setUserProfile} from "../../redux/profileReducer";
import {rootReducerType} from "../../redux/reduxStore";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {usersApi} from "../../api/social-networkApi";
import {AuthRedirect} from "../../hoc/AuthRedirect";

type ContentType = MapStateToPropsType & MapDispatchToProps

export type ProfileType = {
    userId: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    },
    photos: {
        small: string,
        large: string,
    }
}
type MapStateToPropsType = {
    profilePhoto: {
        photos: {
            small: string,
            large: string
        }
    },
    isAuth: boolean,
}
type MapDispatchToProps = {
    profileUserTC: (userId: string) => void,
}
type PathParamsType = {
    userId: string,
}
export type PropsType = RouteComponentProps<PathParamsType> & ContentType


class ContentContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.profileUserTC(userId)
    }

    render() {

        return (
            <Content {...this.props} profilePhoto={this.props.profilePhoto}/>
        )

    }
}

let AuthRedirectComponent = AuthRedirect(ContentContainer)

//     (props: PropsType) => {
//     if (props.isAuth === false) {
//         return <Redirect to={'/login'}/>
//     }
//     return <ContentContainer {...props}/>
// }

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        profilePhoto: state.profile.profile,
        isAuth: state.authorization.isAuth,
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    profileUserTC
})(WithUrlDataContainerComponent);
