import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { apiKey } from '../../Util/API';
import './Actor.css';

const Actor = () => {
  const { actorId } = useParams();
  const [actor, setActor] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}?api_key=${apiKey}`);
        setActor(response.data);
      } catch (error) {
        console.error("Error fetching actor details:", error);
      }
    };

    const fetchActorMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${apiKey}`);
        setMovies(response.data.cast);
      } catch (error) {
        console.error("Error fetching actor movies:", error);
      }
    };

    fetchActorDetails();
    fetchActorMovies();
  }, [actorId]);

  return (
    <div className="actor-details-container">
      {actor && (
        <div className="actor-info">
          <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
          <div className="actor-details">
            <h1>{actor.name}</h1>
            <p><strong>Gender:</strong> {actor.gender === 1 ? 'Female' : 'Male'}</p>
            <p><strong>Popularity:</strong> {actor.popularity}</p>
            <p><strong>Birthday:</strong> {actor.birthday}</p>
            <div className="biography">
              <h2>Biography:</h2>
              <p className='bio'>{actor.biography}</p>
            </div>
          </div>
        </div>
      )}
      <div className="movies-list">
        <h2>Featured Movies</h2>
        <div className="title-cards">
          <div className="card-list">
            {movies.map((movie) => (
              <Link to={`/movie/${movie.id}`} key={movie.id} className="card">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actor;




