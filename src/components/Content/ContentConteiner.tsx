import React from "react";
import {Content} from "./Content";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {rootReducerType} from "../../redux/reduxStore";

type ContentType = {
    setUserProfile: (profile: ProfileType) => void,
    profile: ProfileType
}
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

class ContentContainer extends React.Component<ContentType>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

export default connect(mapStateToProps, {
    setUserProfile: setUserProfile,
})(ContentContainer);
