import styled from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
`;

export const FavoritesContainer = styled.div`
  margin: 20px;
`;

export const Card = styled.div`
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
  }

  button {
    margin-top: 10px;
    padding: 5px 10px;
  }
`;

export const MoviesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchBarContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;

  input {
    padding: 10px;
    width: 300px;
    margin-right: 10px;
  }

  button {
    padding: 10px 20px;
  }
`;
