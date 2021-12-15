import React,{useRef} from 'react';
import Footer from '../components/Footer';
import '../styles/signin.css'
import { auth } from '../utils/firebase';
import { useHistory } from 'react-router-dom';

const Signin = () => {
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    const history = useHistory();

    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message )

        })

    }
    const signIn=(e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value,
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((error)=>{
            alert(error.message )

        })

        setTimeout(history.push("/"),1000)
    }


    return (
        <div className="singinContainer">
            <div className="logoContainer">
                <img className="logo" src="./images/netflix-logo.png" alt="Netflix-logo"/>
            </div>
            <div className="signinLanding">
                <div className="overlay"></div>
            </div>
            <div className="signinBox">
                <h1>Sing In</h1>
                <form className="signinForm">
                    <div className="data">
                        <input ref={emailRef} type="text"   placeholder="Email or phone number"/>
                        <input ref={passwordRef} type="password" placeholder="Password"/>
                    </div>
                    <button className="signinBtn" type="submit" onClick={signIn}>Sign In</button>
                    <div className="signinCheckbox">
                        <div className="checkbox">
                            <input  type="checkbox" name="Remember me"/>
                            <label for="Remember me">Remember me</label>
                        </div>
                        <p className="needHelp"><a href="#">Need help?</a></p>
                    </div>
                </form>
                <p>New to Netflix?<span className='signupLink' onClick={register}>Sign up now.</span></p>                    
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a className='learnMore' href="#">Learn more.</a></p>
            </div>
            <div className="footer">

            <Footer/>
            </div>

        </div>
    );
}
 
export default Signin;