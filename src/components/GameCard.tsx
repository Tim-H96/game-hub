import {
  Card,
  Image,
  CardBody,
  Heading,
  Button,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>

      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <Box
            paddingX={2}
            border={"1px solid"}
            borderRadius={"md"}
            textAlign={"center"}
            color={"green"}
          >
            {game.metacritic}
          </Box>
        </HStack>
        <Heading fontSize={"2xl"}>
          {game.name}
          <Emoji rating={game.rating_top}></Emoji>
        </Heading>

        <Button size={"xsm"}>{game.added}</Button>
      </CardBody>
    </Card>
  );
};

export default GameCard;
