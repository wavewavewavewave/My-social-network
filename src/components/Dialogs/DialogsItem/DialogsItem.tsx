import s from "../DIalogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogsType} from "../../../redux/store";

type PropsType = {
    name: string
    id: number

}

export const DialogItem = (props: PropsType) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    );
}