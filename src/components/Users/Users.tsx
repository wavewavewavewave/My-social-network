import React from 'react';
import s from "./Users.module.css";
import userPhoto from "../../assets/image/220px-User_icon_2.svg.png";
import {UserType} from "../../redux/usersReducer";


export type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPageHandler: (pageNumber: number) => void,
    unFollow: (userId: number) => void,
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    userPhoto: string,
}

export const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.setCurrentPageHandler(p)
                                 }}>{p}</span>
                })}
            </div>
            {
                props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos.small != null ?   u.photos.small : u.userPhoto} className={s.userPhoto}/>
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