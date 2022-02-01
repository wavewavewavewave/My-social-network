import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {UserPostContainer} from "./UserPosts/UserPostContainer";
import React from "react";

type ContentPropsType = {
    profile: null
}

export const Content = (props: ContentPropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <UserPostContainer/>
        </div>
    )
}