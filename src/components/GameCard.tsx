import {
  Card,
  AspectRatio,
  Image,
  CardBody,
  Heading,
  Button,
  Text,
  HStack,
  Box,
} from "@chakra-ui/react";
import { Game } from "../services/game-service";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"lg"} overflow={"hidden"} width={"300px"}>
      <AspectRatio ratio={16 / 9}>
        <Image src={game.background_image}></Image>
      </AspectRatio>
      <CardBody>
        <HStack justifyContent="space-between">
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
        <Heading fontSize={"2xl"}>{game.name}</Heading>

        <Button size={"xsm"}>{game.added}</Button>
        <Text>Body</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
