import React from 'react';
import './App.css';
import Header from './components/Header';
import MoviesPage from './Pages/MoviesPg/Movies';
import Footer from './components/Footer';
import API from './Util/API'
import Movies from './MoviesPg/movie'

function App() {
  return (
    <div> 
      <Header />
      {/* <MoviesPage /> */}
      <Movies/>
      <Footer />
      {/* <API /> */}
      
    </div>
  );
}

export default App;