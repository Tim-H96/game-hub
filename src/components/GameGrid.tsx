import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Grid,
  GridItem,
  Button,
  AspectRatio,
} from "@chakra-ui/react";

interface Game {
  id: number;
  added: number;
  background_image: string;
  name: string;
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get("/games", { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
        console.log(res.data);
      })
      .catch((err) => {
        setError(err.message);
      });
    //return controller.abort();
  }, []);

  return (
    <>
      {error && <p>{error}</p>}
      <Grid templateColumns="repeat(3, 1fr)" minWidth={"200px"} gap={3}>
        {games.map((game) => (
          <GridItem key={game.id} minWidth={"200px"}>
            <Card size={"md"} bg={"gray.700"}>
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={game.background_image}
                  objectFit={"cover"}
                  borderTopRadius={"lg"}
                ></Image>
              </AspectRatio>

              <CardHeader color={"white"}>
                {game.name} <Button size={"xsm"}>{game.added}</Button>
              </CardHeader>
              <CardBody color={"white"}>Body</CardBody>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default GameGrid;
