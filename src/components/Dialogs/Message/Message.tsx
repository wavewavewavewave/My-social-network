import s from "../DIalogs.module.css";
import React, {useState} from "react";
//import {MessageType} from "../../../redux/store";

type MessageItemType = {
    message: string
    id: number
}

export const MessageItem = (props: MessageItemType) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>

    )
}