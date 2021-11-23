import React, {ChangeEvent, ChangeEventHandler} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import {StoreType} from "../../../redux/store";
import {UserPost} from "./UserPost";

type PropsType = {
    store: StoreType
}

export const UserPostContainer: React.FC<PropsType> = (props) => {

    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.newPostText))
    }
    const onPostAdd = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }
    const removePost = () => {
        alert('Bye Bro')
    }

    return (<UserPost updateNewPostText={onPostAdd}
                      addPost={addPost} posts={state.profilePage.posts}
                      newPostText={state.profilePage.newPostText}/>
    )
}
