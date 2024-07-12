import React from "react";
import { FavoritesContainer } from "../styles.js";

const Favorites = ({ favorites }) => {
  return (
    <FavoritesContainer>
      <h2>Favorites</h2>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
          </li>
        ))}
      </ul>
    </FavoritesContainer>
  );
};

export default Favorites;
