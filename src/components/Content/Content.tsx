import React from "react";
import {UserPost} from "./UserPosts/UserPost";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import {UserPostContainer} from "./UserPosts/UserPostContainer";

type ContentType = {
}

export const Content: React.FC<ContentType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostContainer/>
        </div>

    );

}
//props.store._state.profilePage