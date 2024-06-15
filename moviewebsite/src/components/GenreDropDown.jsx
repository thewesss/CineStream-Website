import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GenreDropdown = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=(<<-Api-key->>)');
      setGenres(response.data.genres);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Genre</h2>
      <select>
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default GenreDropdown;