import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiKey } from '../Util/API';
import './Header.css'

const Navbar = () => {
  const [genres, setGenres] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);

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

  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Add your search navigation logic here
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/"><span className='neon'>Cine</span><span className='flux'>Stream</span></Link>
        </Typography>
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
        <Button  onClick={handleMoviesMenuOpen}>
         <span className='act'>Movies</span>
        </Button>
        <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
          <MenuItem onClick={handleMoviesMenuClose}>
            <Link to="/movies"><span>Popular</span></Link>
          </MenuItem>
          <MenuItem onClick={handleMoviesMenuClose}>
            <Link to="/movies"><span>Top Rated</span></Link>
          </MenuItem>
          <MenuItem onClick={handleMoviesMenuClose}>
            <Link to="/movies"><span>Now playing</span></Link>
          </MenuItem>
          <MenuItem onClick={handleMoviesMenuClose}>
            <Link to="/movies"><span>Latest</span></Link>
          </MenuItem>
          <MenuItem onClick={handleMoviesMenuClose}>
            <Link to="/movies"><span>Upcoming</span></Link>
          </MenuItem>
        </Menu>
        <Button color="inherit">
          <Link to="/actors" className='act'><span>Actors</span></Link>
        </Button>
        <TextField
          variant="outlined"
          placeholder="Search..."
          size="small"
          onKeyDown={handleSearch}
          style={{ backgroundColor: 'white', borderRadius: 4 }}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
