import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MovieCard({ movie }) {
  // This function is used to handle an error at any event for any components in javascript
  // with using event handler called OnError
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  //this function is used to change the class of the rating based on the value when called
  const getRatingClass = (rating) => {
    if (rating >= 8) return "rating-good";

    if (rating >= 5 && rating < 8) return "rating-ok";

    return "rating-bad";
  };

  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-genre">{movie.genre}</p>
        <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
          {movie.rating}
        </p>
      </div>
    </div>
  );
}
