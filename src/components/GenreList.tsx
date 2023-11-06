import { HStack, Text, Image, List, ListItem, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <GenreListSkeleton />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <Button
            variant="link"
            onClick={() => onSelectGenre(genre)}
            fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
          >
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={"md"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text whiteSpace={"normal"}>{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
