import React from 'react'
import userPhoto from "../../assets/image/220px-User_icon_2.svg.png";
import s from "./Users.module.css";
import axios from "axios";
import {UserType} from "../../redux/usersReducer";


type UsersType = {
    usersPage: Array<UserType>,
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<UserType>) => void,
}

class UserClass extends React.Component<UsersType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.usersPage.map(u => <div key={u.id}>
                   <span>
                       <div>
                           <img src={u.photos != null ? u.photos : userPhoto} className={s.userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   this.props.unFollow(u.id)
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   this.props.follow(u.id)
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
}


export default UserClass;