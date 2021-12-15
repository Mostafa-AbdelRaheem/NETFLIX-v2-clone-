import React,{useEffect, useState} from 'react';
import Description from './Description';
import axios from '../utils/axios';
import "../styles/row.css";

export const MovieDataContext=React.createContext()


const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    const[movieInfo,setMovieInfo]=useState([]);
    const[descriptionStatus,setDescriptionStatus]=useState(false);
    // const [trailerUrl,setTrailerUrl] = useState("");
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
        // console.log("this is ROW all movies",movie)
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
            {<MovieDataContext.Provider value={{movieInfo,descriptionStatus}} >
                <Description />
            </MovieDataContext.Provider>}
        </div>
    );

}
 
export default Row;
