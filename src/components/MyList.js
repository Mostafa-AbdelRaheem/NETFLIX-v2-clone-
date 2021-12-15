import React,{useState} from 'react';
import Description from './Description';
import "../styles/mylist.css";


export const MovieDataContext=React.createContext()


 const MyList = ({title,list}) => {
    console.log("list of my list movies",list)
    const [movies,setMovies] = useState([]);
    const[movieInfo,setMovieInfo]=useState([]);
    const[descriptionStatus,setDescriptionStatus]=useState(false);
    
    const handleClick=(movie)=>{
        setMovieInfo(movie);
        setDescriptionStatus(true);
        
    }

     return (
        <div className="mylistContainer">
            <h2>{title}</h2>
            <div className="rowPosters">
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
                <Description movieInfo={movieInfo} descriptionStatus={descriptionStatus}/>
         </div>
     );
 }
  
 export default MyList;