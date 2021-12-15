// import env from "react-dotenv";
const API_KEY = process.env.REACT_APP_API_KEY;
const requests ={
    // fetchTrending:`trending/all/day?api_key=${API_KEY}  /trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?with_networks=213&api_key=${API_KEY}`,
    // fetchNetflixOriginals:`/discover/tv?with_networks=213&api_key=${API_KEY}&sort_by=release_date.desc&release_date.gte=2022-01-01`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;

// this link if you get you will find all the genre ids
// https://api.themoviedb.org/3/genre/movie/list?api_key=e88aea6c998dc03d9dc3d1b3bf5880d0&language=en-US
