import React from "react";
import {UserPost} from "./UserPosts/UserPost";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ContentType = {
    state: ProfilePageType
    addPostCallback: () => void
    updatePost: (newPost: string) => void
    newPostText: string
}

export const Content = (props: ContentType) => {
    return (
        <div>
            <ProfileInfo/>
            <UserPost posts={props.state.posts}
                      addPostCallback={props.addPostCallback}
                      updatePost={props.updatePost}
                      newPostText={props.newPostText}/>
        </div>

    );

}