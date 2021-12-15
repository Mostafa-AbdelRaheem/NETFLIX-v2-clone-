import React,{useState} from 'react';
import users from '../fixtures/users.json'
import User from './User';
import '../styles/users.css'

const Users = () => {
    const [recievedUsers,setRecievedUsers] = useState(users);

    return (
        <div className="usersContainer">
            <div className="logoContainer">
                <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
            </div>
            <h1 className="userWatching">Who's watching?</h1>
            <div className="userContainer">
                {recievedUsers.map((user)=>{return(
                        <User key={user.id} user={user}/>
                )})}       

            </div>

        </div>
    );
}
 
export default Users;