import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import LeftPane from "./components/LeftPane";
import NavBar from "./components/NavBar";

function App() {
  const { games, error } = useGames();

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
          <LeftPane onClick={() => console.log("clicked")} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        Game Grid
        <GameGrid games={games} error={error} />
      </GridItem>
    </Grid>
  );
}

export default App;
