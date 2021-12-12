import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'

type UsersType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

export const Users: React.FC<UsersType> = (props) => {
    return (
       <div>
           {
               props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.userPhotoUrl} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={ () => {props.unFollow(u.id)}}>Unfollow</button>
                               : <button onClick={ () => { props.follow(u.id)}}>Follow</button> }
                       </div>
                   </span>
                   <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                           <div>{u.location.city}</div>
                           <div>{u.location.county}</div>
                       </span>
                   </span>
               </div>)
           }
       </div>
    )
}