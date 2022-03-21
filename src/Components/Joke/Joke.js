import React from 'react';

export default function Joke({ joke, genre }) {
  return (
    <div>
      {genre} <br />
      {joke}
    </div>
  );
}
