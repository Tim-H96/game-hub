import { GameQuery } from "../App";
import useData from "./useData";
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

const useGames = (gameQuery: GameQuery) => (
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id, 
            platforms: gameQuery.platform?.id
    }}, 
    [gameQuery])
)

export default useGames