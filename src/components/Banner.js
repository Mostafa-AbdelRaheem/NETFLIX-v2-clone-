import React,{useState,useEffect} from 'react';
import axios from '../utils/axios';
import requests from '../utils/requests';
import '../styles/banner.css'

const Banner = () => {
    const [movie,setMovie] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[
                Math.floor(Math.random()* request.data.results.length -1)
            ]);
            return request;
        }
        fetchData();
      }, []);

      function truncate(str,n){
          return str?.length>n ? str.substr(0,n-1)+ "..." : str;
      }


    return ( 
        <header className="bannerContainer"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("http://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            }}
        
        > 
            <div className="bannerContent">
                <h1 className="bannerTitle">{movie?.title || movie?.name || movie?.original_name}</h1>
                <p className="bannerOverview">{truncate(movie?.overview,150)}</p>
                <div className="bannerButtons">
                    <div className="bannerPlayButton">
                        <img src="./images/icons/play.png"/>
                        <p>play</p>
                    </div>
                    <div className="bannerInfoButton">
                        <img src="./images/icons/info.png"/>
                        <p>More Info</p>
                    </div>
                </div>
            </div>
            <div className="bannerBottom"/>
        </header>
    );
}
 
export default Banner;