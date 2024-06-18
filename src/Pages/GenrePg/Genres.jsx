import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GenreMovies = () => {
  const { genreId } = useParams();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=<<-API_KEY->>&with_genres=${genreId}`);
      setMovies(response.data.results);
    };

    fetchMovies();
  }, [genreId]);

  return (
    <div>
      <h2>Movies in Genre</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreMovies;
