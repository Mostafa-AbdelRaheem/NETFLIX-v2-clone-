import React, { useState,useEffect,useToggle } from 'react';
import { useHistory } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import { auth } from '../utils/firebase';

const Navbar = () => {
    const user = useSelector (selectUser);

    console.log("Nav",user)
    const [show,handleShow]=useState(false);
    const [list,setList]=useState(false);
    const history = useHistory();
    const dispatch=useDispatch();

    const userLogout=()=>{
        dispatch(logout());
        auth.signOut();
        // history.push("/singup")

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
                {/* <Link className="KidesLink" to="#">Kides</Link> */}
                <div onClick={toggleList} className="user">
                {/* onClick={()=>history.push('/profile')} */}
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