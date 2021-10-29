import React from "react";
import s from './UserPosts.module.css';
import {Post} from "./Post/Post";
import {PostsType, ProfilePageType} from "../../../redux/state";

type PropsType = {
    posts: Array<PostsType>
    addPostCallback: (postMessage: string) => void
    updatePost: (newPost: string) => void
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
    const newPostElementRef = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        if (newPostElementRef.current) {
            props.addPostCallback(newPostElementRef.current.value)
            newPostElementRef.current.value = '';
        }
    }
    const onPostAdd = () => {
        if (newPostElementRef.current) {
            props.updatePost(newPostElementRef.current.value)
        }
    }


    return (
        <div className={s.postsblock}>
            <h3>My Post</h3>
            <div>
                <textarea onChange={onPostAdd} ref={newPostElementRef}/>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
                <button onClick={() => {
                    alert('Bye Bro')
                }}>Remove
                </button>
            </div>

            <div className={s.posts}>
                {postsElement}
                {/*<Post massage={postsData[1].massage} likesCount={postsData[1].likesCount}/>*/}
            </div>
        </div>

    );
}