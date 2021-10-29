import s from "../DIalogs.module.css";
import React from "react";
import {MessageType} from "../../../redux/state";

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