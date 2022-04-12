import {Preloader} from "../../../Preloader/Preloader.";
import s from "./ProfileInfo.module.css";
import React, {ChangeEvent, useState} from "react";
import {TextField} from "@mui/material";


type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void,
}


// export const ProfileStatus = (props: ProfileStatusType) => {
//     let [editMode, setEditMode] = useState(false);
//     let [status, setStatus] = useState(props.status);
//
//
//     const activateEditMode = () => {
//         setEditMode(true);
//         setStatus(props.status)
//     }
//     const deactivateEditMode = () => {
//         setEditMode(false);
//     }
//     const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
//         setStatus(e.currentTarget.value)
//     }
//
//     return editMode ?
//         <TextField id="standard-basic" variant="standard" onChange={changeTitle} value={status} autoFocus
//                    onBlur={deactivateEditMode}/>
//         : <div><span onDoubleClick={activateEditMode}>{props.status}</span></div>
// }

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
       this.setState({
           status: e.currentTarget.value
       })
    }

    render() {
        return (
            <>
                {/*{!this.state.editMode &&*/}
                {/*<div>*/}
                {/*    <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>*/}
                {/*</div>*/}
                {/*}*/}
                {!this.state.editMode ?
                    <TextField id="standard-basic" variant="standard" onChange={this.onStatusChange} value={this.props.status}
                               autoFocus onBlur={this.deactivateEditMode}/>
                    : <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    /*<input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>*/
                }
            </>
        )
    }

}