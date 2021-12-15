import React,{useState} from 'react';
import jambotronData from '../fixtures/jumbo.json'
import '../styles/jumbotron.css'

const Jumbotron = () => {
    const [recievedJambotronData,setRecievedJambotronData] = useState(jambotronData);
    return (
    <div className="container">
        <div className="jumbotronContainer">
            {recievedJambotronData.map((jambotronElement)=>{return(
            <div className={jambotronElement.direction==="row-reverse"?"content":"content reversed"} key={jambotronElement.id}>
                <div className="contentText">
                    <h1>{jambotronElement.title}</h1>
                    <h2>{jambotronElement.subTitle}</h2>
                </div>
                <div className="jumbotronImagebox">
                    <img className="jumbotronImage" src={jambotronElement.image} alt={jambotronElement.alt}/>
                </div>
                </div>)})}

            </div> 
            </div>  
            );
}
 
export default Jumbotron;