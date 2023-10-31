import { Game } from "../services/game-service";
import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";

interface Props {
  games: Game[];
  error: string;
  isLoading: boolean;
}

const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const GameGrid = ({ games, error, isLoading }: Props) => {
  return (
    <>
      {error && <p>{error}</p>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        padding={"10px"}
        gap={10}
      >
        {isLoading && skeletons.map((s) => <GameCardSkeletons key={s} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
