import React from "react";
import {ProfileInfo} from "./UserPosts/ProfileInfo/ProfileInfo";
import {UserPostContainer} from "./UserPosts/UserPostContainer";


export const Content = () => {
    return (
        <div>
            <ProfileInfo/>
            <UserPostContainer />
        </div>

    );

}
//props.store._state.profilePage