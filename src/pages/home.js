import React from 'react';
import Navbar from './../components/Navbar';
import Banner from './../components/Banner';
import  Row from './../components/Row';
import requests from '../utils/requests';
import Footer from './../components/Footer'

 const Home = () => {
     return (
         <div>
            <Navbar/>
            <Banner/>
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Footer/>

         </div>
     );
 }
  
 export default Home;