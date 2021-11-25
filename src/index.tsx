import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {App} from "./App";
import React from "react";
import {Provider} from "react-redux";
import storeOld from "./redux/store";
import {StateType} from "./redux/store";
import {store} from "./redux/reduxStore";
import {StoreContext} from "./StoreContext.";



// export const rerenderEntireTree = () => {

ReactDOM.render(
    <BrowserRouter>
        <StoreContext.Provider value={storeOld}>
            <App />
        </StoreContext.Provider>
    </BrowserRouter>, document.getElementById('root'));


{/*  rerenderEntireTree(store.getState());
        store.subscribe(() => {
        let state = store.getState()
        rerenderEntireTree(state)
    });*/
}

