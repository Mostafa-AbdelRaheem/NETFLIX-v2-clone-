import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
    <div className="container">
        <div className="footerBox">
            
            <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Speed Test</a></li>
            </ul>   
            <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Jobs</a></li>
                <li><a href="#">Cookie Preferences</a></li>
                <li><a href="#">Legal Notices</a></li>
            </ul>

            <ul>
                <li><a href="#">Account</a></li>
                <li><a href="#">Ways to Watch</a></li>
                <li><a href="#">Corporate Information</a></li>
                <li><a href="#">Only on Netflix</a></li>
            </ul>
            <ul>
                <li><a href="#">Media Center</a></li>                
                <li><a href="#">Terms f Use</a></li>
                <li><a href="#">Contact us</a></li>    
            </ul>

        </div>
    </div>
    );
}
 
export default Footer;