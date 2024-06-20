import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../Util/API';
import './HomePg.css'; 

const HomePage = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const popularResponse = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`);
        setPopularMovies(popularResponse.data.results);

        const topRatedResponse = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`);
        setTopRatedMovies(topRatedResponse.data.results);

        const trendingResponse = await axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`);
        setTrending(trendingResponse.data.results);

        const nowPlayingResponse = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`);
        setNowPlaying(nowPlayingResponse.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="homepage-container">
      <section id="slider">
        {popularMovies.slice(0, 5).map((movie, index) => (
          <input
            key={index}
            type="radio"
            name="slider"
            id={`s${index + 1}`}
            defaultChecked={index === 2}
          />
        ))}
        {popularMovies.slice(0, 5).map((movie, index) => (
          <label
            key={index}
            htmlFor={`s${index + 1}`}
            id={`slide${index + 1}`}
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </section>

       {/* currently-playing carousal
       toprated-carousal */}

      <h1 className='Blazing' contenteditable="true">Trending Movies and Series</h1>
      <div className="trending-grid">
        {trending.slice(0, 12).map((item) => (
          <div key={item.id} className="trending-card">
            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title || item.name} />
            <h3>{item.title || item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
