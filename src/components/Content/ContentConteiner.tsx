import React from "react";
import {Content} from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {rootReducerType} from "../../redux/reduxStore";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ContentType = MapStateToPropsType & MapDispatchToProps
    //setUserProfile: (profile: ProfileType) => void,
    //profile: ProfileType


export type ProfileType = {
    photos: SizeType,
}
export type SizeType = {
    small: string,
    large: string
}
type MapStateToPropsType = {
    profile: ProfileType,
}
type MapDispatchToProps = {
    setUserProfile: (profile: ProfileType) => void,
}
type PathParamsType = {
    userId: string,
}
type PropsType = RouteComponentProps<PathParamsType> & ContentType


class ContentContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(res => {
                this.props.setUserProfile(res.data)
            });
    }

    render() {
        return (
            <Content {...this.props} profile={this.props.profile}/>
        )
    }

}

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        profile: state.profile.profile,
    }
}

let WithUrlDataContainerComponent = withRouter(ContentContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);