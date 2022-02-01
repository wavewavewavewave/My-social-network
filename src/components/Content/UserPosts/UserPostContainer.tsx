import React, {} from "react";
import {addPost, PostsType, updateNewPostText} from "../../../redux/profileReducer";
import {UserPost} from "./UserPost";
import {connect} from "react-redux";
import {rootReducerType} from "../../../redux/reduxStore";

type MapStateToPropsType = {
    posts: Array<PostsType>,
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void
    onPostAdd: (text: string) => void
}
let mapStateToProps = (state: rootReducerType): MapStateToPropsType => {
    return {
        posts: state.profile.posts,
        newPostText: state.profile.newPostText
    }
}
/*//let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        onPostAdd: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}*/
export const UserPostContainer = connect(mapStateToProps,
    {
        addPost: addPost,
        onPostAdd: updateNewPostText,
    })(UserPost)




