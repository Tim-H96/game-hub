import create from "./http-service";

export interface FetchGamesResponse{
    count: number;
    results: Game[]
}
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

export default create('/games');