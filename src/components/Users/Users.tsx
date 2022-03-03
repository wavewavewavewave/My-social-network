import React from 'react';
import s from "./Users.module.css";
import {UserType} from "../../redux/usersReducer";
import {NavLink} from 'react-router-dom';
import {instance, usersApi} from "../../api/social-networkApi";

export const PATH = {
    PRE_MISS: '/profile'
}

export type UsersType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    setCurrentPageHandler: (pageNumber: number) => void,
    unFollow: (userId: number) => void,
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    userPhoto: string,
    toggleFollowingInProgress: (isFetching: boolean, userId: string) => void,
    followingInProgress: string[],
}

export const Users: React.FC<UsersType> = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (i <= 10) {
            pages.push(i)
        }
    }
    return (
        <div>
            <div>
                {pages.map((p, index) => {

                    return <span className={props.currentPage === p ? s.selectedPage : ''}
                                 onClick={(e) => {
                                     props.setCurrentPageHandler(p)
                                 }}>{p}</span>
                })}
                {pages.length >= 10 && "..."}
            </div>
            {
                props.usersPage.map(u => {
                    return <div key={u.id}>
                   <span>
                       <div>
                           <NavLink to={`/profile/${u.id}`}>
                           <img src={u.photos.small != null ? u.photos.small : props.userPhoto}
                                className={s.userPhoto}/>
                       </NavLink>
                           </div>
                       <div>
                           {u.followed
                               ? <button disabled={props.followingInProgress.some(id => id === String(u.id))}
                                         onClick={() => {
                                             props.toggleFollowingInProgress(true, String(u.id))
                                             usersApi.unFollowUser(u.id)
                                                 .then(res => {
                                                     if (res.data.resultCode === 0) {
                                                         props.unFollow(u.id)
                                                     }
                                                     props.toggleFollowingInProgress(false, String(u.id))
                                                 })
                                         }}>Unfollow</button>
                               : <button disabled={props.followingInProgress.some(id => id === String(u.id))}
                                         onClick={() => {
                                             props.toggleFollowingInProgress(true, String(u.id))
                                             usersApi.followUser(u.id)
                                                 .then(res => {
                                                 if (res.data.resultCode === 0) {
                                                     props.follow(u.id)
                                                 }
                                                 props.toggleFollowingInProgress(false, String(u.id))
                                             })
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
                    </div>
                })
            }
        </div>
    )
}