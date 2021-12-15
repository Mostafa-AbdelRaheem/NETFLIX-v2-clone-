import React,{useState} from 'react';
import '../styles/header.css'
import Jumbotron from "../components/Jumbotron";
import FAQs from '../components/FAQs';
import Footer from '../components/Footer';
import Signin from './signin';

const Signup = () => {
  // const [emailValue,setEmailValue]=useState('');
  const [startSignIn,setStartSignIn] = useState(false);

  const hadnleGetStarted=()=>{
    setStartSignIn(true)

  }

    return (
        <div>
          {startSignIn?  
          <Signin/>
        :
        <div>
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
                            {/* <button  className="SingInBtn">Sing in</button> */}
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
                            <div className="emailContainer">
                              <form className="formFormate">
                                      <label className="emailLabel">Ready to watch? Enter your email to create or restart your membership.</label>
                                  <div className="formGroup">
                                      {/* <input value={emailValue} onChange={(e)=>setEmailValue(e.target.value) } type="email" className="formInput" placeholder="Email address"  /> */}
                                      <button onClick={hadnleGetStarted} type="submit" className="btn">{`Get Started >`}</button>
                                  </div>
                              </form>
                          </div>
                        </div>
                    </div>
                    <div className="landingBottom"></div>
                </div>
            </div>

        <Jumbotron />
        <FAQs />
        <Footer/>
        </div>
        }



      </div>
    );
}
 
export default Signup;

