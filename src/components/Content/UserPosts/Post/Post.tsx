import React from "react";
import s from './Post.module.css';
import {PostsType} from "../../../../redux/state";

type PostType = {
    // posts: Array<PostsType>
     post: PostsType
    /*message: string
    likesCount: number*/
}



export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img src='data:image/jpeg;base64,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' />
            {props.post.message}
            <div>
                <span>likes, {props.post.likesCount}</span>  {/*{props.likesCount}*/}
            </div>
        </div>
    );
}