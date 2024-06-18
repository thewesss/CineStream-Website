import React from 'react';
import './App.css';
import Header from './components/Header';

import Footer from './components/Footer';

import Movies from './Pages/MoviesPg/movie'

function App() {
  return (
    <div> 
      <Header />
      <Movies />
      <Footer />
      
    </div>
  );
}

export default App;