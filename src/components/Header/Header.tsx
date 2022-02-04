import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean,
    login: null,
}


export const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="https://static.bobr.by/2014/12/03/vseti.png"/>
            <div className={s.loginBlock}>
                {
                    props.isAuth ? props.login :
                        <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
}