import {Preloader} from "../../../Preloader/Preloader.";
import s from "./ProfileInfo.module.css";
import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";

// id="standard-basic" variant="standard"

type ProfileStatusType = {
    status: string
}


export const ProfileStatus = (props: ProfileStatusType) => {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.status)
    }
    const activateViewMode = () => {
        setEditMode(false);
    }
    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return editMode ?
        <TextField id="standard-basic" variant="standard" value={title} autoFocus onBlur={activateViewMode}/>
        : <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>
}

// export class ProfileStatus extends React.Component<ProfileStatusType> {
//
//     state = {
//         editMode: false
//     }
//
//     onDoubleClickHandler = () => {
//
//         this.setState({
//             editMode: true
//         })
//         alert('Hey Hey')
//     }
//
//     render() {
//         return (
//             <>
//                 {!this.state.editMode &&
//                 <div>
//                     <span onDoubleClick={this.onDoubleClickHandler}>{this.props.status}</span>
//                 </div>
//                 }
//                 {!this.state.editMode &&
//                 <div>
//                     <input value={this.props.status}/>
//                 </div>
//                 }
//             </>
//         )
//     }
//
// }