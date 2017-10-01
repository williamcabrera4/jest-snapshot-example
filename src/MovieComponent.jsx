import React from 'react';

const MovieComponent = ({ movie }) => (
  <div>
    <h1>My Movie</h1>
    <ul>
      <li><b>Title:</b> {movie.title}</li>
      <li><b>Description:</b> {movie.description}</li>
      <li><b>Language:</b> {movie.language}</li>
      <li>
        <b>Writers:</b>
        {movie.writers.map((writer) => writer).join(',')}
      </li>
      <li>
        <b>Actors:</b>
        {movie.actors.map((actor) => actor).join(',')}
      </li>
      <li>
        <b>Genres:</b>
        {movie.genres.map((genre) => genre).join(',')}
      </li>
    </ul>
  </div>
);

export default MovieComponent;
