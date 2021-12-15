import React,{ useState} from 'react';
import FAQ from './FAQ';
import EmailForm from './EmailForm';
import faqs from '../fixtures/faqs.json'
import '../styles/faqs.css'

export const QuestionContext=React.createContext()

const FAQs = () => {
    const [recievedFAQs,setRecievedFAQs] = useState(faqs);

    return (
    <div className="container">
        <div className="FAQSContainer">
        <h1>
        Frequently Asked Questions
        </h1>
            {recievedFAQs.map((faq)=>{return(
                <QuestionContext.Provider  key={faq.id} value={faq}>
                    <FAQ />
                </QuestionContext.Provider>
            )})}       
        </div>
    </div>
    );
}
 
export default FAQs;
