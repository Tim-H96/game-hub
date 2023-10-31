import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";

function App() {
  const { games, error, isLoading } = useGames();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "left-pane main"`,
      }}
      gap="2"
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"left-pane"}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid games={games} error={error} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}

export default App;
