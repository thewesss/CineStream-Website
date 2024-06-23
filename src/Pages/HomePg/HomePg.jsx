

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { apiKey } from '../../Util/API';
// import './HomePg.css';

// const HomePage = () => {
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [trending, setTrending] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(0); // State to manage active carousel index

//   useEffect(() => {
//     const fetchMovies = async () => {
//       try {
//         const popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
//         setPopularMovies(popularResponse.data.results);

//         const trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
//         setTrending(trendingResponse.data.results);
//       } catch (error) {
//         console.error("Error fetching movies:", error);
//       }
//     };
//     fetchMovies();
//   }, []);

//   // Carousel auto-move effect
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % popularMovies.slice(0, 7).length);
//     }, 5000);

//     return () => clearInterval(intervalId);
//   }, [popularMovies]);

//   return (
//     <div className="homepage-container">
//       <div className="carousel-container">
//         <div className="c">
//           {popularMovies.slice(0, 7).map((movie, index) => (
//             <React.Fragment key={index}>
//               <input
//                 type="radio"
//                 name="a"
//                 id={`cr-${index + 1}`}
//                 checked={activeIndex === index}
//                 readOnly
//               />
//               <label
//                 htmlFor={`cr-${index + 1}`}
//                 style={{ '--hue': 32 * (index + 1) }}
//                 onClick={() => setActiveIndex(index)}
//               ></label>
//               <div className="ci" style={{ '--z': 7 - index }}>
//                 <h2 className="ch" style={{ '--h': 32 * (index + 1), '--s': '80%', '--l': '90%' }}>
//                   {movie.title}
//                 </h2>
//                 <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />
//               </div>
//             </React.Fragment>
//           ))}
//         </div>
//       </div>

//       <div className='currently_playing-container'>
//         {/* Content for currently playing movies */}
//       </div>

//       <div className='tv_shows-container'>
//         {/* Content for TV shows */}
//       </div>

//       <div className='trending-container'>
//         <h1 className='Blazing' contentEditable="true">Trending Movies and Series</h1>
//         <div className="trending-grid">
//           {trending.slice(0, 14).map((item) => (
//             <Link key={item.id} to={`/movie/${item.id}`} className="trending-card">
//               <img src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} alt={item.title || item.name} />
//               <h3>{item.title || item.name}</h3>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { apiKey } from '../../Util/API';
import './HomePg.css';

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [trendingTVShows, setTrendingTVShows] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        setPopularMovies(popularResponse.data.results);

        const trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
        setTrending(trendingResponse.data.results);

        const trendingTVResponse = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?api_key=${apiKey}`);
        setTrendingTVShows(trendingTVResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % popularMovies.slice(0, 7).length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [popularMovies]);

  return (
    <div className="homepage-container">
      <div className="carousel-container">
        <div className="c">
          {popularMovies.slice(0, 7).map((movie, index) => (
            <React.Fragment key={index}>
              <input
                type="radio"
                name="a"
                id={`cr-${index + 1}`}
                checked={activeIndex === index}
                readOnly
              />
            
              <label
                htmlFor={`cr-${index + 1}`}
                style={{ '--hue': 32 * (index + 1) }}
                onClick={() => setActiveIndex(index)}
              ></label>
              <div className="ci" style={{ '--z': 7 - index }}>
                <h2 className="ch" style={{ '--h': 32 * (index + 1), '--s': '80%', '--l': '90%' }}>
                  {movie.title}
                </h2>
                <img src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`} alt={movie.title} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className='currently_playing-container'>
        {/* Content for currently playing movies */}
      </div>

      <div className='tv_shows-container'>
        <h2 className="carousel-title">Trending TV Shows</h2>
        <div className="scroll-container">
          <div className="carousel-primary">
            {trendingTVShows.slice(0, 20).map((show, index) => (
              <div key={index} className="tv-show">
                <img src={`https://image.tmdb.org/t/p/w300/${show.backdrop_path}`} alt={show.name} />
                <p>{show.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='trending-container'>
        <h1 className='Blazing' contentEditable="true">Trending Movies and Series</h1>
        <div className="trending-grid">
          {trending.slice(0, 14).map((item) => (
            <Link key={item.id} to={`/movie/${item.id}`} className="trending-card">
              <img src={`https://image.tmdb.org/t/p/w780/${item.poster_path}`} alt={item.title || item.name} />
              <h3>{item.title || item.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
