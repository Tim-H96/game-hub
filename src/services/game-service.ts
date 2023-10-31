import create from "./http-service";

export interface Game{
    id: number;
    added: number;
    background_image: string;
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