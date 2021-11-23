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
import {ActionsTypes, StateType, StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type PropsAppType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
    newPostText: string
}

export const App: React.FC<PropsAppType> = (props) => {
    const state = props.store.getState()
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper'>
                <Route path='/profile' render={() => <Content store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}
