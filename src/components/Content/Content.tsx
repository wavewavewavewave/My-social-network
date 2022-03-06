import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {UserPostContainer} from "./UserPosts/UserPostContainer";
import React from "react";
import {ProfileType} from "./ContentConteiner";

type ContentPropsType = {
    profilePhoto: {photos: {
            small: string,
            large: string
        }}
}

export const Content = (props: ContentPropsType) => {
    return (
        <div>
            <ProfileInfo profilePhoto={props.profilePhoto}/>
            <UserPostContainer/>
        </div>
    )
}