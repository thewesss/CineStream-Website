import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { apiKey } from '../../Util/API';
import './SingleMoviePg.css';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [mainCast, setMainCast] = useState([]);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`);
        setMovie(response.data);

        const castResponse = response.data.credits.cast;
        setMainCast(castResponse.slice(0, 5));

        const relatedResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${apiKey}`);
        setRelatedMovies(relatedResponse.data.results.slice(0, 5));

        const trailerVideo = response.data.videos.results.find(video => video.type === 'Trailer');
        setTrailer(trailerVideo ? `https://www.youtube.com/watch?v=${trailerVideo.key}` : null);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  return (
    <div className="movie-details-container">
      {movie && (
        <div>
          <div className="glassmorphic-card">
            <h1>{movie.title}</h1>
            <div className="movie-header">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <p><strong>Release Date:</strong> {movie.release_date}</p>
                <div className="divider"></div>
                <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                <div className="divider"></div>
                <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
                <div className="divider"></div>
                <p><strong>Director:</strong> {movie.credits?.crew.find(member => member.job === 'Director')?.name || 'N/A'}</p>
              </div>
              <div className="rating-watch-container">
                {trailer && (
                  <a href={trailer} target="_blank" rel="noopener noreferrer" className="watch-now-button">
                    Watch Now
                  </a>
                )}
                <div className="rating-container">
                  <span className="movie-rating">{movie.vote_average}</span>
                </div>
                <div className="user-rating">
                  <input type="radio" id="star5" name="rate" value="5" />
                  <label htmlFor="star5" title="text"></label>
                  <input type="radio" id="star4" name="rate" value="4" />
                  <label htmlFor="star4" title="text"></label>
                  <input type="radio" id="star3" name="rate" value="3" />
                  <label htmlFor="star3" title="text"></label>
                  <input type="radio" id="star2" name="rate" value="2" />
                  <label htmlFor="star2" title="text"></label>
                  <input checked="" type="radio" id="star1" name="rate" value="1" />
                  <label htmlFor="star1" title="text"></label>
                </div>
              </div>
            </div>
            <div className="overview">
              <h2>Overview</h2>
              <p>{movie.overview}</p>
            </div>
          </div>
          <div className="title-cards">
            <h2>Main Cast</h2>
            <div className="card-list">
              {mainCast.map((actor) => (
                <Link to={`/actor/${actor.id}`} key={actor.id} className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
                  <p>{actor.name}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="title-cards">
            <h2>Films you may like...</h2>
            <div className="card-list">
              {relatedMovies.map((relatedMovie) => (
                <Link to={`/movie/${relatedMovie.id}`} key={relatedMovie.id} className="card">
                  <img src={`https://image.tmdb.org/t/p/w500/${relatedMovie.poster_path}`} alt={relatedMovie.title} />
                  <p>{relatedMovie.title}</p>
                </Link>
              ))}
            </div>
          </div>
          <div className="production-companies">
            <h2>Production Companies</h2>
            <div className="companies-list">
              {movie.production_companies.map((company) => (
                <div key={company.id} className="company-card">
                  <img src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name} />
                  <p>{company.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;












