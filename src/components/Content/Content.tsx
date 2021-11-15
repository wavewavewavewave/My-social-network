import React from "react";
import {UserPost} from "./UserPosts/UserPost";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../redux/store";

type ContentType = {
    state: ProfilePageType
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const Content: React.FC<ContentType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPost posts={props.state.posts}
                      dispatch={props.dispatch}
                      newPostText={props.newPostText}/>
        </div>

    );

}