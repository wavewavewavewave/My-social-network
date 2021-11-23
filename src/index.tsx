import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {Provider} from "react-redux";
import storeOld from "./redux/store";
import {StateType} from "./redux/store";
import {store} from "./redux/reduxStore";



// export const rerenderEntireTree = () => {

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App store={storeOld}
                 dispatch={storeOld.dispatch.bind(storeOld)}
                 newPostText={storeOld._state.profilePage.newPostText}/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


{/*  rerenderEntireTree(store.getState());
        store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    });*/
}

