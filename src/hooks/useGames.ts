import useData from "./useData";

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

const useGames = () => useData<Game>('/games')

export default useGames