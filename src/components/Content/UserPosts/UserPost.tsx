import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './UserPosts.module.css';
import {Post} from "./Post/Post";
import {addPostAC,updateNewPostTextAC} from "../../../redux/profileReducer";
import {ActionsTypes, PostsType} from "../../../redux/store";

type PropsType = {
    posts: Array<PostsType>
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

export const UserPost: React.FC<PropsType> = (props) => {

    const postsElement = props.posts.map(post => <Post post={post}/>)

    const addPost = () => {
        props.addPost()
    }
    const onPostAdd = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
    }

    const removePost = () => {
        alert('Bye Bro')
    }


    return (
        <div className={s.postsblock}>
            <h3>My Post</h3>
            <div>
                <input onChange={onPostAdd} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button onClick={removePost}>Remove
                </button>
            </div>

            <div className={s.posts}>
                {postsElement}
                {/*<Post massage={postsData[1].massage} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>

    );
}
