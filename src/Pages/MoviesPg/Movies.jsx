
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiKey } from '../../Util/API';
import { Link, useLocation } from 'react-router-dom';
import './Movies.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [heading, setHeading] = useState('Popular'); // Default to 'Popular'
  const location = useLocation();

  const fetchMovies = async (category) => {
    let url = `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`;
    if (category === 'latest') {
      url = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`;
    }
    try {
      const response = await axios.get(url);
      if (category === 'latest') {
        setMovies([response.data]);
      } else {
        setMovies(response.data.results);
      }
      setHeading(category.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    const category = new URLSearchParams(location.search).get('category') || 'popular';
    fetchMovies(category);
  }, [location]);

  return (
    <div className='movie-container'>
      <h1 className='heading'>{heading}</h1>
      <div className="movies-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title || movie.name} />
              <h3>{movie.title || movie.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
