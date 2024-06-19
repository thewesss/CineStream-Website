// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const GenreMovies = () => {
//   const { genreId } = useParams();
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchMovies = async () => {
//       const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=<<-API_KEY->>&with_genres=${genreId}`);
//       setMovies(response.data.results);
//     };

//     fetchMovies();
//   }, [genreId]);

//   return (
//     <div>
//       <h2>Movies in Genre</h2>
//       <ul>
//         {movies.map((movie) => (
//           <div>
//             <li key={movie.id}>{movie.title}</li>
//           <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}  />
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GenreMovies;

// SECOND CODE

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { apiKey } from '../../Util/API';

// const Genres = () => {
//     const [genres, setGenres] = useState([]);

//     const fetchGenres = async () => {
//         try {
//             const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//             const data = await response.json();
//             setGenres(data.genres);
//         } catch (error) {
//             console.error("Error fetching genres:", error);
//         }
//     };

//     useEffect(() => {
//         fetchGenres();
//     }, []);

//     return (
//         <div>
//             <h1>Genres</h1>
//             <ul>
//                 {genres.map((genre) => (
//                     <li key={genre.id}>
//                         <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Genres;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiKey } from '../../Util/API';


const GenreMovies = () => {
    const { id } = useParams();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    const fetchMoviesByGenre = async (genreId) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=8a04b7b7ae9756b7634fadb6e3bf31c5`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMovies(data.results);
            console.log(data)
        } catch (error) {
            setError("Error fetching movies. Please try again later.");
            console.error("Error fetching movies:", error);
        }
    };

    useEffect(() => {
        fetchMoviesByGenre(id);
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Movies</h1>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default GenreMovies;

