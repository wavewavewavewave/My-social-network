import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/image/220px-User_icon_2.svg.png'

type UsersType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

export const Users: React.FC<UsersType> = (props) => {
    let getUsers = () => {
        if (props.usersPage.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            });
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos != null ? u.photos : userPhoto} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   props.unFollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   props.follow(u.id)
                               }}>Follow</button>}
                       </div>
                   </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{'u.location.city'}</div>
                           <div>{'u.location.county'}</div>
                       </span>
                   </span>
                </div>)
            }
        </div>
    )
}