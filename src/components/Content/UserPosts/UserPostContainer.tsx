import React, {ChangeEvent, ChangeEventHandler} from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profileReducer";
import store, {StoreType} from "../../../redux/store";
import {UserPost} from "./UserPost";
import {ProviderType, StoreContext} from "../../../StoreContext.";

type PropsType = {}

export const UserPostContainer: React.FC<PropsType> = (props) => {

    // return (
    //     <StoreContext.Consumer>{
    //         (store) => {
                let state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText))
                }
                const onPostAdd = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                const removePost = () => {
                    alert('Bye Bro')
                }

               return <UserPost updateNewPostText={onPostAdd}
                          addPost={addPost}
                          posts={state.profilePage.posts}
                          newPostText={state.profilePage.newPostText}/>
            // }
    //     }
    //     </StoreContext.Consumer>
    // )
}
