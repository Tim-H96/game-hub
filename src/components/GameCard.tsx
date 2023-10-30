import {
  Card,
  AspectRatio,
  Image,
  CardBody,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";
import { Game } from "../services/game-service";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"lg"} overflow={"hidden"} padding={"10px"}>
      <AspectRatio ratio={16 / 9}>
        <Image src={game.background_image}></Image>
      </AspectRatio>
      <CardBody color={"white"}>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Button size={"xsm"}>{game.added}</Button>
        <Text>Body</Text>
      </CardBody>
    </Card>
  );
};

export default GameCard;
