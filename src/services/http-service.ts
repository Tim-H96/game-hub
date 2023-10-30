import apiClient from "./api-client";
import { Game } from "./game-service";

export interface FetchGamesResponse{
    count: number;
    results: Game[]
}

class HttpService{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<FetchGamesResponse>(){
        const controller = new AbortController();
        const request = apiClient.get<FetchGamesResponse>(this.endpoint, {
            signal: controller.signal
        });
        return {request, cancel: () => controller.abort()}
    };
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create