import React from 'react';
import "../styles/row.css";
 const MyList = ({title,list}) => {

    // const [movies,setMovies] = useState([]);
    // const[movieInfo,setMovieInfo]=useState([]);
    // const[descriptionStatus,setDescriptionStatus]=useState(false);
    
    // const handleClick=(movie)=>{
    //     setMovieInfo(movie);
    //     setDescriptionStatus(true);
        
    // }

     return (
        <div className="row">
            <h2>{title}</h2>
            {/* <div className="rowPosters">
                {list.map((movie)=>{
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
            </MovieDataContext.Provider>} */}

         </div>
     );
 }
  
 export default MyList;