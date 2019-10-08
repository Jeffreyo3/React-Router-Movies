import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = (props) => {
  
  const id = Number(props.id);
  const { title, director, metascore, stars } = props.movie;
  return (

      <div className="movie-card">
        <NavLink to={`/movies/${id}`}>
          <h2>{title}</h2>
        </NavLink>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map(star => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>

  );


};

export default MovieCard;
