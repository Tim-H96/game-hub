import { SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeletons from "./GameCardSkeletons";
import GameCardContainer from "./GameCardContainer";
import useGames from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const skeletons = [1, 2, 3, 4, 5];

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);

  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }} spacing={6}>
      {isLoading
        ? skeletons.map((s) => (
            <GameCardContainer key={s}>
              <GameCardSkeletons />
            </GameCardContainer>
          ))
        : data.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game}></GameCard>
            </GameCardContainer>
          ))}
    </SimpleGrid>
  );
};

export default GameGrid;
