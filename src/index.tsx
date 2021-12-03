import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
// import {Provider} from "react-redux";
// import storeOld from "./redux/store";
import {StateType} from "./redux/store";
import {store} from "./redux/reduxStore";
import {Provider} from "react-redux";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree()
})

