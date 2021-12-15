import React, {useState, useContext } from 'react';
import { QuestionContext } from './FAQs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../styles/faq.css'



const FAQ = () => {
    const faq = useContext(QuestionContext);
    const [togglelFAQ, setTogglelFAQ] = useState(false);
    const handleToggleFAQ=(()=>{setTogglelFAQ((togglelFAQ === true) ? false : true);})

    return (
    <div className="FAQContainer">
        <div  className="questionContainer">
            <div onClick={()=>handleToggleFAQ()} className="question" >
                <h2>{faq.header}</h2>
                <FontAwesomeIcon className={togglelFAQ?"icon active":"icon"} icon={faTimes} />
            </div>
            <div className="answerContainer">
                {togglelFAQ?<p className="answer">{faq.body}</p>:null}
            </div>
        </div>
    </div>
    );
}
 
export default FAQ;