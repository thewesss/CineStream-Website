// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// // import Actors from './Pages/ActorsPg/Actors'
// import Footer from './components/Footer';
// // import GenresMovies from './Pages/GenrePg/Genres'
// import Movies from './Pages/MoviesPg/movie'
// // import Actors from './Pages/ActorsPg/Actors';
// import Actor from './Pages/ActorPg/Actor';
// import Carousel from './Pages/CarouselPg/Carousel';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Allmovies from './Pages/MoviesPg/Allmovies';
// import MoviesDetails from './Pages/MoviesPg/MovieDetails';

// function App() {
//   return (
//     <div> 
//       {/* <Carousel/>
//       <Movies /> */}
//       {/* <Actors /> */}
//       {/* <GenresMovies /> */}
//       {/* <Actor /> */}
//       <BrowserRouter>
//       <Header />

//       <Routes>
//         <Route>
//           <Route path="/" element={<Allmovies />} />
//           <Route path="/moviedetails/:title" element={<MoviesDetails />} />
//         </Route>
//       </Routes>
//       <Footer />

//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Movies from './Pages/MoviesPg/Movies';
import Actors from './Pages/ActorsPg/Actors';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allmovies from './Pages/MoviesPg/Allmovies';
import MovieDetails from './Pages/MoviesPg/MovieDetails';
import SearchBar from './SearchBarPg/Searchbar';
import Box from "@mui/material/Box";
import GenreMovies from './Pages/GenrePg/Genres';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <SearchBar />
               
                
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/all-movies" element={<Actors />} />
                    <Route path="/moviedetails/:id" element={<MovieDetails />} />
                    <Route path="/genre/:genreId" element={<GenreMovies />} />
                    <Route path="/genre/:genreId" element={<MoviesDetails />} />

                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
