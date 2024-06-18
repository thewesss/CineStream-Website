import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Actor = ({ actorId }) => {
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorData = async () => {
      const actorResponse = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=(<<-Api_key->>)`);
      setActor(actorResponse.data);
    };

    const fetchActorMovies = async () => {
      const moviesResponse = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=(<<-API_KEY->>`);
      setMovies(moviesResponse.data.cast);
    };

    fetchActorData();
    fetchActorMovies();
  }, [actorId]);

  if (!actor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{actor.name}</h2>
      <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
      <p>Gender: {actor.gender === 1 ? 'Female' : 'Male'}</p>
      <p>Popularity: {actor.popularity}</p>
      <p>Birthday: {actor.birthday}</p>
      <p>Biography: {actor.biography}</p>
      <h3>Featured Movies</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Actor;
