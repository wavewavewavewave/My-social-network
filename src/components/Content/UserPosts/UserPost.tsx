import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './UserPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPostCallback: (postMessage: string) => void
    updatePost: (newPost: string) => void
    newPostText: string
}

export const UserPost = (props: PropsType) => {

    const postsElement = props.posts.map(post => <Post post={post}/>)

    /*   const postsElement = props.posts.map(post => {
           return (
               <Post
                   message={post.message}
                   likesCount={post.likesCount}
               />
           )
       })*/

    const addPost = () => {
        props.addPostCallback(props.newPostText)
        props.updatePost('')
    }
    const onPostAdd = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value)
    }

    const removePost = () => {
        alert('Bye Bro')
    }


    return (
        <div className={s.postsblock}>
            <h3>My Post</h3>
            <div>
                <textarea onChange={onPostAdd} value={props.newPostText}/>
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