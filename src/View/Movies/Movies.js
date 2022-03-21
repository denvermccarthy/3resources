import React, { useState, useEffect } from 'react';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetch = () => {
      try {
        console.log('movies');
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);
  return <div>Movies</div>;
}
