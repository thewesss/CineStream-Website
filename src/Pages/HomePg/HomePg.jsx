import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../Util/API'; // Adjust the path as necessary
import './HomePage.css'; // Import the CSS file for styling

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const latestMovies = await fetchMovies('latest');
      setMovies(latestMovies);
    };
    getMovies();
  }, []);

  return (
    <div className="homepage">
      <h1>Latest Movies</h1>
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className="movie-item">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
