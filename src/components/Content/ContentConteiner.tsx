import React from "react";
import {Content} from "./Content";
import {connect} from "react-redux";
import {
    profileUserTC,
    setStatusProfile,
    setStatusProfileTC,
    setUserProfile,
    updateStatusProfileTC
} from "../../redux/profileReducer";
import {rootReducerType} from "../../redux/reduxStore";
import {AuthRedirect} from "../../hoc/AuthRedirect";

import {compose} from "redux";
import {RouteComponentProps, withRouter} from "react-router-dom";



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
    status: string,
}
type MapDispatchToProps = {
    profileUserTC: (userId: string) => void,
    setStatusProfileTC: (userId: string) => void,
    updateStatusProfileTC: (status: string) => void,
}
type PathParamsType = {
    userId: string,
}
// interface PropsType extends RouteComponentProps<PathParamsType>  {
//
// }
export type PropsType = RouteComponentProps<PathParamsType> & ContentType


class ContentContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        this.props.profileUserTC(userId)
        this.props.setStatusProfileTC(userId)
    }

    render() {

        return (
            <Content {...this.props} profilePhoto={this.props.profilePhoto}
                     status={this.props.status} updateStatus={this.props.updateStatusProfileTC}/>
        )

    }
}

// let AuthRedirectComponent = AuthRedirect(ContentContainer)

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        profilePhoto: state.profile.profile,
        status: state.profile.status,
    }
}
export default compose<React.ComponentType>(
    connect(mapStateToProps, {profileUserTC, setStatusProfileTC, updateStatusProfileTC}),
     withRouter,
    AuthRedirect
)(ContentContainer)



// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {
//     profileUserTC
// })(WithUrlDataContainerComponent);
