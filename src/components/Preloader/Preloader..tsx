import s from "../Users/Preloader.module.css";
import preload from "../../assets/image/loading-load.gif";
import React from "react";

export const Preloader = () => {
    return (
        <div className={s.preload}>
            <img src={preload}/>
        </div>
    )
}