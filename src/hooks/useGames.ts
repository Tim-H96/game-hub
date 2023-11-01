import useData from "./useData";
import { Genre } from "./useGenres";

export interface Game{
    id: number;
    added: number;
    background_image: string;
    metacritic: number;
    name: string;
    parent_platforms: {platform: Platform}[],
    released: string;
}

export interface Platform{
    id: number,
    name: string,
    slug: string
}

const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.slug}}, [selectedGenre?.slug])

export default useGames