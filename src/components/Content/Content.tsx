import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {UserPostContainer} from "./UserPosts/UserPostContainer";
import React from "react";
import {ProfileType} from "./ContentConteiner";

type ContentPropsType = {
    profilePhoto: {photos: {
            small: string,
            large: string
        }},
    status: string,
    updateStatus: (status: string) => void,
}

export const Content = (props: ContentPropsType) => {
    return (
        <div>
            <ProfileInfo profilePhoto={props.profilePhoto} status={props.status} updateStatus={props.updateStatus}/>
            <UserPostContainer/>
        </div>
    )
}