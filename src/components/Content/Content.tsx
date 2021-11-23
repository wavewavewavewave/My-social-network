import React from "react";
import {UserPost} from "./UserPosts/UserPost";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../redux/store";
import {UserPostContainer} from "./UserPosts/UserPostContainer";

type ContentType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Content: React.FC<ContentType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostContainer store={props.store}/>
        </div>

    );

}
//props.store._state.profilePage