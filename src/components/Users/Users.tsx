import React from 'react';
import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";

type UsersType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

export const Users: React.FC<UsersType> = (props) => {
if (props.usersPage.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers([{
            id: 1,
            userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
            followed: false,
            fullName: 'Daniil Novikov',
            status: 'Hello,dude, go 1 katochku dlya nastroeniya',
            location: {city: 'Minsk', county: 'Belarus'}
        },
            {
                id: 2,
                userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
                followed: true,
                fullName: 'Polkovnik Sobko',
                status: 'How are you?',
                location: {city: 'Donbas', county: 'DNR'}
            },
            {
                id: 3,
                userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
                followed: false,
                fullName: 'Arsenii Nerush',
                status: 'Kotlin, its my life bro!',
                location: {city: 'Moscow', county: 'Russia'}
            },
            {
                id: 4,
                userPhotoUrl: 'https://sun9-38.userapi.com/impg/c857232/v857232909/173ed0/WuoPWO2i1kA.jpg?size=720x1080&quality=96&sign=8719b8650f2555b4b6e24fbf8808abba&type=album',
                followed: true,
                fullName: 'Roman Pisheiko',
                status: 'Go drink vodka',
                location: {city: 'Gomel', county: 'Belarus'}
            }])
    });
}
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