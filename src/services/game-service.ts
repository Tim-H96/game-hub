import create from "./http-service";

export interface Game{
    id: number;
    added: number;
    background_image: string;
    name: string;
    released: string;
}

export default create('/games');