import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../Util/API';
import { Link } from 'react-router-dom';
import './Actors.css';

const Actors = () => {
  const [actors, setActors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async (page) => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=${apiKey}&page=${page}`);
        setActors(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="actors-container">
      <h1 className="heading">Famous Actors</h1>
      <div className="actors-grid">
        {actors.map((actor) => (
          <Link to={`/actor/${actor.id}`} key={actor.id} className="actor-card">
            <h2>{actor.name}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)} 
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className='pgnumber' >Page {currentPage} of {totalPages}</span>
        <button 
          onClick={() => handlePageChange(currentPage + 1)} 
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Actors;



