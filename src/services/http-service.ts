import apiClient from "./api-client";

class HttpService{
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint = endpoint;
    }

    getAll<T>(){
        const request = apiClient.get<T[]>(this.endpoint);
        return request
    };
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create