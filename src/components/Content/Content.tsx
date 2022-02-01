import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {UserPostContainer} from "./UserPosts/UserPostContainer";
import React from "react";
import {ProfileType} from "./ContentConteiner";

type ContentPropsType = {
    profile: ProfileType
}

export const Content = (props: ContentPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <UserPostContainer/>
        </div>
    )
}