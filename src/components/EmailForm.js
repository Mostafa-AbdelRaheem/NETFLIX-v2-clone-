import React from 'react';
import '../styles/emailForm.css'


const EmailForm = () => {
    return (
    <div className="emailContainer">
        <form className="formFormate">
                <label className="emailLabel">Ready to watch? Enter your email to create or restart your membership.</label>
            <div className="formGroup">
                <input type="email" className="formInput" placeholder="Email address"  />
                <button  type="submit" className="btn">{`Get Started >`}</button>
            </div>
        </form>
    </div>
    );
}
 
export default EmailForm;