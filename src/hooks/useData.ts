import  { useEffect, useState } from 'react'
import { CanceledError } from 'axios';
import apiClient from '../services/api-client';

interface FetchResponse<T>{
    count: number,
    results: T[]
}

const useData = <T>(endpoint:string) => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController
        setIsLoading(true);
        apiClient.get<FetchResponse<T>>(endpoint)
            .then((res) => {  
                setData(res.data.results);
                setIsLoading(false);
            })
            .catch((err) => { 
                if(err instanceof CanceledError) return;
                setIsLoading(false);
            });
            return controller.abort();
    }, []);

    return {data, error, isLoading, setData, setError};
}

export default useData