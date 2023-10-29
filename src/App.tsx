import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={`"nav nav"
                        "left-pane main"`}
      gridTemplateRows={"100px 1fr"}
      gridTemplateColumns={"200px 1fr"}
      gap="2"
      bg={"gray.800"}
    >
      <GridItem pl="2" area={"nav"} bg={"orange.300"}>
        Nav
      </GridItem>
      <GridItem pl="2" area={"left-pane"} bg={"blue.200"}>
        Left Pane
      </GridItem>
      <GridItem pl="2" area={"main"} color={"white"}>
        Game Grid
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
