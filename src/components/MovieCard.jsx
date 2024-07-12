import React from "react";
import { Card } from "../styles.js";

const MovieCard = ({ movie, addToFavorites }) => {
  return (
    <Card>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
    </Card>
  );
};

export default MovieCard;
