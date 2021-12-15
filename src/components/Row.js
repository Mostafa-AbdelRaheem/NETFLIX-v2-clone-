import React,{useEffect, useState} from 'react';
import Description from './Description';
import axios from '../utils/axios';
import "../styles/row.css";


const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    const[movieInfo,setMovieInfo]=useState([]);
    const[descriptionStatus,setDescriptionStatus]=useState(false);
    useEffect(() => {

        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
      }, [fetchUrl]);

    
    const handleClick=(movie)=>{
        setMovieInfo(movie);
        setDescriptionStatus(true);
        
    }
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="rowPosters">
                {movies.map((movie)=>{
                    return (
                        <img key={movie.id}
                        onClick={()=>handleClick(movie)}
                        className="rowPoster" 
                        src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} 
                        alt={movie.name}
                        />
                        )
                    })}
            </div>
                <Description movieInfo={movieInfo} descriptionStatus={descriptionStatus} />
        </div>
    );

}
 
export default Row;
