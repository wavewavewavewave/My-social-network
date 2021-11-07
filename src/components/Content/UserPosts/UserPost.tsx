import React, {ChangeEvent, ChangeEventHandler} from "react";
import s from './UserPosts.module.css';
import {Post} from "./Post/Post";
import {ActionsTypes, PostsType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const UserPost: React.FC<PropsType> = (props) => {

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
        /*props.addPost()*/
        props.dispatch({type: 'ADD-POST', newPostText: props.newPostText})
    }
    const onPostAdd = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.updatePostCallback(e.currentTarget.value)*/
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newPost: e.currentTarget.value})
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