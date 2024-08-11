import  { useState, useEffect } from 'react'
import axios from '../../Constants/Axios';
import { apiKey, imageUrl } from '../../Constants/Constants';
import './Home.css'
import TitleCard from '../../Component/TitleCard/TitleCard'
import Banner from '../../Component/Banner/Banner'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
function Home() {
  const [movie, setMovie] = useState([])
  const [trending, setTrending] = useState([])
  const [topRated, setTopRated] = useState([])
  const [upcoming, setUpcoming] = useState([])
  useEffect(() => {
    // Fetch trending movies/TV shows for the week
    axios.get(`trending/all/week?api_key=${apiKey}`)
      .then((res) => {
        setTrending(res.data.results);
        setMovie(res.data.results[Math.floor(Math.random() * res.data.results.length)]);
      })
      .catch((error) => {
        console.error("Error fetching trending data:", error);
      });
  
    // Fetch top-rated movies
    axios.get(`movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      .then((res) => {
        setTopRated(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
      });
      axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`).then((res) => {
        setUpcoming(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching top-rated movies:", error);
      });
  }, []);
  
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0.9) 5%,
      rgba(20, 20, 20, 0.2) 20%,
      rgba(20, 20, 20, 0.2) 80%,
      rgba(20, 20, 20, 0.8) 100%
    ), 
    url(${imageUrl + movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="background"
    >
      <NavBar />
      <Banner movie={movie} />
      <TitleCard cardTitle="Trending Now" movieCatogory={trending}/>
      <TitleCard cardTitle="Top Rated" movieCatogory={topRated}/>
      <TitleCard cardTitle="Upcoming" movieCatogory={upcoming}/>
      <Footer />
    </div >
  )
}

export default Home
