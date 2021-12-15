import React,{useContext,useState,useEffect} from 'react';
import YouTube from 'react-youtube';
import '../styles/video.css';

const Video = ({showVideo,setShowVideo,trailerUrl}) => {
    const opts={
        height:"630px",
        width:"965px",
        playerVars:{
            autoplay:1
        },
    }
    return (

        <div >                
            {showVideo?<div className="videoContainer">
                <img className="close" onClick={()=>setShowVideo(prev=>!prev)} src="./images/icons/close.png"/>

                 {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
                 </div>:null}
        </div>
    );
}
 
export default Video;