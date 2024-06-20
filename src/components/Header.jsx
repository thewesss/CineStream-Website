// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
// import { fetchMovies, fetchActors, apiKey } from '../Util/API';
// import axios from 'axios';

// const Navbar = () => {
//     const [genres, setGenres] = useState([]);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);

//     useEffect(() => {
//         const fetchGenres = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//                 setGenres(response.data.genres);
//             } catch (error) {
//                 console.error("Error fetching genres:", error);
//             }
//         };
//         fetchGenres();
//     }, []);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const handleMoviesMenuOpen = (event) => {
//         setMoviesAnchorEl(event.currentTarget);
//     };

//     const handleMoviesMenuClose = () => {
//         setMoviesAnchorEl(null);
//     };

//     const handleSearch = (event) => {
//         if (event.key === 'Enter') {
//         }
//     };

//     return (
//         <AppBar position="static">
//             <Toolbar>
//                 <Typography variant="h6" style={{ flexGrow: 1 }}>
//                     MovieWebsite
//                 </Typography>
//                 <Button color="inherit" onClick={handleMenuOpen}>
//                     Genres
//                 </Button>
//                 <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                     {genres.map((genre) => (
//                         <MenuItem key={genre.id}>{genre.name}</MenuItem>
//                     ))}
//                 </Menu>
//                 <Button color="inherit" onClick={handleMoviesMenuOpen}>
//                     Movies
//                 </Button>
//                 <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
//                     <MenuItem onClick={() => fetchMovies('top_rated')}>Top Rated</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('popular')}>Popular</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('latest')}>Latest</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('now_playing')}>Now Playing</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('upcoming')}>Upcoming</MenuItem>
//                 </Menu>
//                 <Button color="inherit" onClick={() => {}}>About us</Button>
//                 <Button color="inherit" onClick={() => {}}>Contact us</Button>
//                 <Button color="inherit" onClick={() => {}}>Actors</Button>
//                 <TextField
//                     variant="outlined"
//                     placeholder="Search..."
//                     size="small"
//                     onKeyDown={handleSearch}
//                     style={{ backgroundColor: 'white', borderRadius: 4 }}
//                 />
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar;

// SECOND CODE

// import React, { useState, useEffect } from 'react';
// import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
// import { fetchMovies, fetchActors, apiKey } from '../Util/API';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Navbar = () => {
//     const [genres, setGenres] = useState([]);
//     const [anchorEl, setAnchorEl] = useState(null);
//     const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
    

//     useEffect(() => {
//         const fetchGenres = async () => {
//             try {
//                 const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
//                 setGenres(response.data.genres);
//             } catch (error) {
//                 console.error("Error fetching genres:", error);
//             }
//         };
//         fetchGenres();
//     }, []);

//     const handleMenuOpen = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleMenuClose = () => {
//         setAnchorEl(null);
//     };

//     const handleMoviesMenuOpen = (event) => {
//         setMoviesAnchorEl(event.currentTarget);
//     };

//     const handleMoviesMenuClose = () => {
//         setMoviesAnchorEl(null);
//     };
//     const SearchBar = () => {
//         const [query, setQuery] = useState('');
//         const navigate = useNavigate();
    
//         const handleInputChange = (e) => {
//             setQuery(e.target.value);
//         };
//         const Header = () => {
//             const [searchTerm, setSearchTerm] = useState('');

//     const handleSearch = (event) => {
//         if (event.key === 'Enter') {
//             setSearchTerm(event.target.value);
        
//     };
//     return (
//         <div style={styles.container}>
//             <input
//                 type="text"
//                 value={query}
//                 onChange={handleInputChange}
//                 onKeyDown={handleSearch}
//                 placeholder="Search..."
//                 style={styles.input}
//             />
//             <button onClick={() => navigate(`/moviedetails/${query}`)} style={styles.button}>
//                 Search
//             </button>
//         </div>
//     );
// };


// const styles = {
//     container: {
//         display: 'flex',
//         alignItems: 'center',
//         margin: '10px',
//     },
//     input: {
//         flex: 1,
//         padding: '10px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//         marginRight: '10px',
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '16px',
//         borderRadius: '4px',
//         border: 'none',
//         backgroundColor: '#007BFF',
//         color: '#fff',
//         cursor: 'pointer',
//     },
// };


//     return (
//         <AppBar position="static" style={{ backgroundColor: 'black' }}>
//             <Toolbar>
//                 <Typography variant="h6" style={{ flexGrow: 1, color: 'gold' }}>
//                     MovieWebsite
//                 </Typography>
//                 <Button color="inherit" onClick={handleMenuOpen} style={{ color: 'gold' }}>
//                     Genres
//                 </Button>
//                 <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
//                     {genres.map((genre) => (
//                         <MenuItem key={genre.id}>{genre.name}</MenuItem>
//                     ))}
//                 </Menu>
//                 <Button color="inherit" onClick={handleMoviesMenuOpen} style={{ color: 'gold' }}>
//                     Movies
//                 </Button>
//                 <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
//                     <MenuItem onClick={() => fetchMovies('top_rated')} style={{ color: 'gold' }}>Top Rated</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('popular')} style={{ color: 'gold' }}>Popular</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('latest')} style={{ color: 'gold' }}>Latest</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('now_playing')} style={{ color: 'gold' }}>Now Playing</MenuItem>
//                     <MenuItem onClick={() => fetchMovies('upcoming')} style={{ color: 'gold' }}>Upcoming</MenuItem>
//                 </Menu>
//                 <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>About us</Button>
//                 <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>Contact us</Button>
//                 <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>Actors</Button>
//                 <TextField
//                     variant="outlined"
//                     placeholder="Search..."
//                     size="small"
//                     onKeyDown={handleSearch}
//                     style={{ backgroundColor: 'gold', borderRadius: 4, color: 'black' }}
//                 />
//             </Toolbar>
//         </AppBar>
//     );
// };

// export default Navbar,

import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, TextField } from '@mui/material';
import { fetchMovies, fetchActors, apiKey } from '../Util/API';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
    const [genres, setGenres] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [moviesAnchorEl, setMoviesAnchorEl] = useState(null);
    const [query, setQuery] = useState('');
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

    const handleSearch = (event) => {
        if (event.key === 'Enter') {
            navigate(`/moviedetails/${query}`);
        }
    };

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: 'black' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1, color: 'gold' }}>
                    MovieWebsite
                </Typography>
                <Button color="inherit" onClick={handleMenuOpen} style={{ color: 'gold' }}>
                    Genres
                </Button>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    {genres.map((genre) => (
                        <MenuItem key={genre.id}>{genre.name}</MenuItem>
                    ))}
                </Menu>
                <Button color="inherit" onClick={handleMoviesMenuOpen} style={{ color: 'gold' }}>
                    Movies
                </Button>
                <Menu anchorEl={moviesAnchorEl} open={Boolean(moviesAnchorEl)} onClose={handleMoviesMenuClose}>
                    <MenuItem onClick={() => fetchMovies('top_rated')} style={{ color: 'gold' }}>Top Rated</MenuItem>
                    <MenuItem onClick={() => fetchMovies('popular')} style={{ color: 'gold' }}>Popular</MenuItem>
                    <MenuItem onClick={() => fetchMovies('latest')} style={{ color: 'gold' }}>Latest</MenuItem>
                    <MenuItem onClick={() => fetchMovies('now_playing')} style={{ color: 'gold' }}>Now Playing</MenuItem>
                    <MenuItem onClick={() => fetchMovies('upcoming')} style={{ color: 'gold' }}>Upcoming</MenuItem>
                </Menu>
                <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>About us</Button>
                <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>Contact us</Button>
                <Button color="inherit" onClick={() => {}} style={{ color: 'gold' }}>Actors</Button>
                <TextField
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    value={query}
                    onChange={handleInputChange}
                    onKeyDown={handleSearch}
                    style={{ backgroundColor: 'gold', borderRadius: 4, color: 'black' }}
                />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
