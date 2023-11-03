import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

export interface Game{
    id: number;
    added: number;
    background_image: string;
    metacritic: number;
    name: string;
    parent_platforms: {platform: Platform}[],
    released: string;
}



const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => (
    useData<Game>('/games', {
        params: {
            genres: selectedGenre?.id, 
            platform: selectedPlatform?.id
    }}, 
    [selectedGenre?.id, selectedPlatform?.id])
)

export default useGames