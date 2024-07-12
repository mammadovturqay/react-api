import React, { useState } from "react";
import axios from "axios"; // aXIOS YUKLEDIM
import SearchBar from "./components/SearchBar.jsx";
import MovieList from "./components/MovieList.jsx";
import Favorites from "./components/Favorites.jsx";
import { AppContainer } from "./styles.js";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async () => {
    const response = await axios.get(
      `http://www.omdbapi.com/?apikey=f2c0a572&s=${searchQuery}`
    );
    setMovies(response.data.Search);
  };

  const addToFavorites = (movie) => {
    setFavorites([...favorites, movie]);
  };

  return (
    <AppContainer>
      <h1>Movie Search</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <Favorites favorites={favorites} />
      <MovieList movies={movies} addToFavorites={addToFavorites} />
    </AppContainer>
  );
};

export default App;
