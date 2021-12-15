import React, {useState, useContext, useCallback } from 'react';
import '../styles/user.css'


const User = ({user}) => {
    console.log(user)
    return (
    <div >
        <div className="profileContainer">
            <div className="userImageContainer">
                <img className="userImage" src={user.image} alt={user.alt}/>
            </div>
            <p className="userName">{user.name}</p>
        </div>
    </div>
    );
}
 
export default User;