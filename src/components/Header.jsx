import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from '../Util/API';
import './Header.css'; 
import SearchBar from '../Pages/SearchBar/Searchbar';

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
        setGenres(response.data.genres);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };
    fetchGenres();
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMoviesMenuOpen = (event) => {
    setMoviesAnchorEl(event.currentTarget);
  };

  const handleMoviesMenuClose = () => {
    setMoviesAnchorEl(null);
  };

  const handleCategoryClick = (category) => {
    navigate(`/movies?category=${category}`);
    setMoviesAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" className="cine-stream-link">
            <span className='neon'>Cine</span><span className='flux'>Stream</span>
          </Link>
        </Typography>
        <SearchBar />
        <Button onClick={handleMoviesMenuOpen}>
          <span className='act'>Movies</span>
        </Button>
        <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
          <MenuItem onClick={() => handleCategoryClick('popular')}>
            <span>Popular</span>
          </MenuItem>
          <MenuItem onClick={() => handleCategoryClick('top_rated')}>
            <span>Top Rated</span>
          </MenuItem>
          <MenuItem onClick={() => handleCategoryClick('now_playing')}>
            <span>Now Playing</span>
          </MenuItem>
          <MenuItem onClick={() => handleCategoryClick('upcoming')}>
            <span>Upcoming</span>
          </MenuItem>
          <MenuItem onClick={() => handleCategoryClick('latest')}>
            <span>Latest</span>
          </MenuItem>
        </Menu>
        <Button color="inherit" onClick={handleMenuOpen}>
          <span className='act'>Genres</span> 
        </Button>
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          {genres.map((genre) => (
            <MenuItem key={genre.id} onClick={handleMenuClose}>
              <Link to={`/genre/${genre.id}`} style={{ color: 'inherit', textDecoration: 'none' }}>{genre.name}</Link>
            </MenuItem>
          ))}
        </Menu>
        <Button color="inherit">
          <Link to="/actors" className='act'><span>Actors</span></Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;





