import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import useGames from "./hooks/useGames";
import LeftPane from "./components/LeftPane";

function App() {
  const { games, error } = useGames();

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "left-pane main"`,
      }}
      gridTemplateRows={"100px 1fr"}
      gridTemplateColumns={"200px 1fr"}
      gap="2"
    >
      <GridItem area={"nav"} bg={"orange.300"}>
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"left-pane"} bg={"blue.200"}>
          <LeftPane onClick={() => console.log("clicked")} />
        </GridItem>
      </Show>
      <GridItem area={"main"} color={"white"} bg={"coral"}>
        Game Grid
        <GameGrid games={games} error={error} />
      </GridItem>
    </Grid>
  );
}

export default App;
