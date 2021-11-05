import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Content} from "./components/Content/Content";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType, StoreType} from "./redux/state";

type PropsAppType = {
    store: StoreType
    addPostCallback: () => void
    updatePost: (newPost: string) => void
    newPostText: string
}

export const App = (props: PropsAppType) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper'>
                <Route path='/profile' render={() => <Content state={props.store._state.profilePage}
                                                              addPostCallback={props.addPostCallback.bind(props.store)}
                                                              newPostText={props.newPostText}
                                                              updatePost={props.updatePost.bind(props.store)}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.store._state.dialogsPage}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}
