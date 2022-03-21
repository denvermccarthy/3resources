import React, { useEffect, useState } from 'react';
import Joke from '../../Components/Joke/Joke';
import { getJokes } from '../../services/fetchJokes';

export default function Jokes() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const jokes = await getJokes();
        setJokes(jokes);
      } catch (error) {
        alert(error.message);
      }
    };
    fetch();
  }, []);

  return (
    <div>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke.joke_content} genre={joke.genre_id.genre} />
      ))}
    </div>
  );
}
