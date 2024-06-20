import { useState, useEffect } from "react";
import { apiKey } from "../../Util/API";
import { Link } from "react-router-dom";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Movies.css'; // Import the CSS file for styling

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
      );
      const data = await response.json();
      setMovies(data.results);
      console.log(data.results); // Logging the fetched data
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="movies-container">
      <h1 className="title">Movies</h1>
      <Slider {...settings} className="movie-slider">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-item">
            <Link to={`/moviedetails/${movie.id}`}>
              <Card sx={{ minWidth: 275, backgroundColor: 'black', color: 'gold' }}>
                <CardContent>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt={movie.title}
                    className="movie-image"
                  />
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Movies;
