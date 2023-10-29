import create from "./http-service";

export interface Game{
    id: number;
    added: number;
    background_image: string;
    name: string;
}

export default create('/games');