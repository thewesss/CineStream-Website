import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const GenreDropdown = () => {
  const [genres, setGenres] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchGenres = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=<<-API_KEY->>');
      setGenres(response.data.genres);
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    history.push(`/genre/${genreId}`);
  };

  return (
    <div>
      <select onChange={handleGenreChange}>
        <option value="">Select a genre</option>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreDropdown;
