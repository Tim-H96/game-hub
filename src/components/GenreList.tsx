import { HStack, Text, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <Button variant="link" onClick={() => console.log(genre.name)}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"md"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
