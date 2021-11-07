import {StateType, store, StoreType,} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
                 newPostText={store._state.profilePage.newPostText}/>
        </BrowserRouter>, document.getElementById('root'));
}

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
