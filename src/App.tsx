import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import ContentContainer from "./components/Content/ContentConteiner";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";

type PropsAppType = {
}

export const App: React.FC<PropsAppType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper'>
                <Route path='/profile' render={() => <ContentContainer />}/>
                <Route path='/dialogs' render={() => <DialogsContainer />}/>
                <Route path='/users' render={() => <UsersContainer />}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>

    );
}
