import {addNewPost, addPost, state, StateType, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPostCallback={addPost}
                 updatePost={addNewPost}
                 newPostText={state.profilePage.newPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();
subscribe(rerenderEntireTree);
