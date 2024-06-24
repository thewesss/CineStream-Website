import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './Pages/MoviesPg/Movies';
import Actors from './Pages/ActorsPg/Actors';
import Actor from './Pages/ActorPg/Actor';
import GenreMovies from './Pages/GenrePg/Genres';
import HomePage from './Pages/HomePg/HomePg';
import MovieDetails from './Pages/SingleMoviePg/SingleMoviesPg';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/genre/:genreId" element={<GenreMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/actors" element={<Actors />} />
        <Route path="/actor/:actorId" element={<Actor />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;