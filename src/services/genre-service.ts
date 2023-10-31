import create from "./http-service";

export interface FetchGenresResponse{
    count: number;
    results: Genre[]
}

export interface Genre{
    id: number;
    name: string;
}

export default create('/genres');