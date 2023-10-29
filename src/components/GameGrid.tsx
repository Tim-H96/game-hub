import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Game {
  id: number;
  metacritic: number;
  name: string;
  playtime: number;
  rating: number;
  genres: [{ name: string }];
  image: string;
  released: string;
}

const GameGrid = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get("/games")
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
        console.log(err);
      });
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        Game Grid
        {games.map((game: Game) =>
          game.genres.map((g) => g.name === "RPG" && <li>{game.name}</li>)
        )}
      </ul>
    </>
  );
};

export default GameGrid;
