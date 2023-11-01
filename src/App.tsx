import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import NavBar from "./components/NavBar";
import GenreList from "./components/GenreList";

function App() {
  const { data, error, isLoading } = useGames();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "left-pane main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px, 1fr",
      }}
      columnGap={5}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"left-pane"} paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid games={data} error={error} isLoading={isLoading} />
      </GridItem>
    </Grid>
  );
}

export default App;
