import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import { fetchMovies, fetchActors, apiKey } from '../Util/API';
import axios from 'axios';

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
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    MovieWebsite
                </Typography>
                <Button color="inherit" onClick={handleMenuOpen}>
                    Genres
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    {genres.map((genre) => (
                        <MenuItem key={genre.id}>{genre.name}</MenuItem>
                    ))}
                </Menu>
                <Button color="inherit" onClick={handleMoviesMenuOpen}>
                    Movies
                </Button>
                <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
                    <MenuItem onClick={() => fetchMovies('top_rated')}>Top Rated</MenuItem>
                    <MenuItem onClick={() => fetchMovies('popular')}>Popular</MenuItem>
                    <MenuItem onClick={() => fetchMovies('latest')}>Latest</MenuItem>
                    <MenuItem onClick={() => fetchMovies('now_playing')}>Now Playing</MenuItem>
                    <MenuItem onClick={() => fetchMovies('upcoming')}>Upcoming</MenuItem>
                </Menu>
                <Button color="inherit" onClick={() => {}}>About us</Button>
                <Button color="inherit" onClick={() => {}}>Contact us</Button>
                <Button color="inherit" onClick={() => {}}>Actors</Button>
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

