import React from "react";
import {UserPost} from "./UserPosts/UserPost";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ContentType = {
    state: ProfilePageType
    addPostCallback: () => void
    newPostText: string
    updatePostCallback: (newPost: string) => void
}

export const Content: React.FC<ContentType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPost posts={props.state.posts}
                      addPostCallback={props.addPostCallback}
                      updatePostCallback={props.updatePostCallback}
                      newPostText={props.newPostText}/>
        </div>

    );

}