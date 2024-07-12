import React from "react";
import MovieCard from "./MovieCard.jsx";
import { MoviesContainer } from "../styles.js";

const MovieList = ({ movies, addToFavorites }) => {
  return (
    <MoviesContainer>
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          addToFavorites={addToFavorites}
        />
      ))}
    </MoviesContainer>
  );
};

export default MovieList;
