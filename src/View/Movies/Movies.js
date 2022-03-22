import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../../services/movies';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchMovies();
        setMovies(data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return <div>Movies</div>;
}
