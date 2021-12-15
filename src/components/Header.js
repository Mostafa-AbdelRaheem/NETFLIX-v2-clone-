import React from 'react';
import '../styles/header.css'
import EmailForm from './EmailForm';

const Header = () => {

    return (
    <div className="headerMainContainer">
        <div className="headerContainer">
            <div className="headerNavbar">
                <div className="logoContainer">
                    <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
                </div>
                <div className="selection">
                    <form className="formContainer">
                        <select className="language">
                            <option value="English">English</option>    
                        </select>
                    </form>
                </div>
            </div>
        </div>
        <div className="homeLanding">
            <div class="overlay"></div>
            <div className="landingContainer">
                <div class="text">
                    <div class="content">
                        <h1 className="landingHeader">Unlimited movies, TV shows, and more.</h1>
                        <p className="landingText">Watch anywhere. Cancel anytime.</p>
                    </div>
                    <EmailForm/>
                </div>
            </div>
            <div className="landingBottom"></div>
        </div>
    </div>
    );
}
 
export default Header;