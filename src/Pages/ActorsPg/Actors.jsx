import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Actors = () => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/person/popular?api_key=(<<-Api-key->>)');
      setActors(response.data.results);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Famous Actors</h1>
      {actors.map((actor) => (
        <div key={actor.id}>
          <h2>{actor.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default Actors;