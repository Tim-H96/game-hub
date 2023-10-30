import { Game } from "../services/game-service";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";

interface Props {
  games: Game[];
  error: string;
}

const GameGrid = ({ games, error }: Props) => {
  return (
    <>
      {error && <p>{error}</p>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10px"}
        gap={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
