import axios from 'axios';

export const apiKey = '8a04b7b7ae9756b7634fadb6e3bf31c5';
const apiBaseURL = 'https://api.themoviedb.org/3';

export const fetchMovies = (type) => {
    return axios.get(`${apiBaseURL}/movie/${type}?api_key=${apiKey}`);
};

export const fetchMovieDetails = (movieId) => {
    return axios.get(`${apiBaseURL}/movie/${movieId}?api_key=${apiKey}&append_to_response=videos,credits`);
};

export const fetchActors = () => {
    return axios.get(`${apiBaseURL}/person/popular?api_key=${apiKey}`);
};

export const fetchActorDetails = (actorId) => {
    return axios.get(`${apiBaseURL}/person/${actorId}?api_key=${apiKey}&append_to_response=movie_credits`);
};

export const searchMoviesOrActors = (query) => {
    return axios.get(`${apiBaseURL}/search/multi?api_key=${apiKey}&query=${query}`);
};
