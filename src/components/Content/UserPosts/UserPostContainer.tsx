import React, {ChangeEvent, ChangeEventHandler} from "react";
import {addPostAC, PostsType, ProfilePageType, updateNewPostTextAC} from "../../../redux/profileReducer";
import {UserPost} from "./UserPost";
import { StoreContext} from "../../../StoreContext.";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";
import {Dispatch} from "redux";

type PropsType = {}

export const UserPostContainer: React.FC<PropsType> = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState();

                const addPost = () => {
                    store.dispatch(addPostAC(state.profile.newPostText))
                }
                const onPostAdd = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text))
                }
                const removePost = () => {
                    alert('Bye Bro')
                }

                return <UserPost updateNewPostText={onPostAdd}
                                 addPost={addPost}
                                 posts={state.profile.posts}
                                 newPostText={state.profile.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}
export type MapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText: string
}
export type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    onPostAdd: (text: string) => void
}

let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        onPostAdd: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}
export const SuperContainer = connect(mapStateToProps, mapDispatchToProps)(UserPost)
