import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { apiKey } from '../../Util/API'; // wes

const GenreMovies = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
      setMovies(response.data.results);
      console.log(response.data.results);
      
    };

    fetchMovies();
  }, [genreId]);

  return (
    
    <div key={movies.id}>
      <h2>Movies in Genre</h2>
      <ul>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/movie/${movies.id}`}>
            <li>{movie.title}</li>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
        ))}
      </ul>

    </div>
  );
};

export default GenreMovies;

