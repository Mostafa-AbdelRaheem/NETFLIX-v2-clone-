import React, { useState,useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../features/userSlice';
import { auth } from '../utils/firebase';
import '../styles/navbar.css'

const Navbar = () => {
    const [show,handleShow]=useState(false);
    const [list,setList]=useState(false);
    const dispatch=useDispatch();

    const userLogout=()=>{
        dispatch(logout());
        auth.signOut();

    }

    const toggleList=()=>{
        {list?setList(false):setList(true)}
    }


    const transitionNavBar=()=>{
        if(window.scrollY>100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    };
    
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavBar)
        return ()=>{
            window.removeEventListener("scroll",transitionNavBar);
        }
    },[])

    return (
        <div className={`navbarContainer ${show &&"navbarContainerBlack"}`}>
            <div className="browseNavbar">
            <div className="leftSideNavbar">
                <div className="logoContainer">
                    <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
                </div>
            </div>
            <div className="RightSideNavbar">
                <FontAwesomeIcon className="searchIcon" icon={faSearch}/>
                <div onClick={toggleList} className="user">
                    <img  className="userAvatar" src="./images/users/2.png" alt="userAvatar"/>
                {list&&<ul className='list'>
                    <li><a onClick={userLogout}>Logout</a></li>
                </ul>}
                </div>
            </div>
            </div>
        </div>
      );
}
 
export default Navbar;