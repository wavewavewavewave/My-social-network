import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import ContentContainer from "./components/Content/ContentConteiner";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginPage} from "./components/Login/LoginPage";
import {LinearProgress} from "@mui/material";
import {Redirect, Route, Switch} from "react-router-dom";

type PropsAppType = {}

export const App: React.FC<PropsAppType> = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper'>
                <Switch>
                    <Route path='/profile:userId?' render={() => <ContentContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginPage/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path="/404" render={() => <h1 style={{textAlign: "center"}}>404: PAGE NOT FOUND</h1>}/>
                    <Redirect from="*" to={"/404"}/>
                </Switch>
                {/*<LinearProgress color="secondary"/>*/}
            </div>
        </div>

    );
}
