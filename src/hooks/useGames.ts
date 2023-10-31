import  { useEffect, useState } from 'react'
import gameService, {Game }  from '../services/game-service';
import { FetchGamesResponse } from '../services/http-service';
import { CanceledError } from 'axios';


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        
        const {request, cancel} = gameService.getAll<FetchGamesResponse>();
        setIsLoading(true);
        request
            .then((res) => {  
                setGames(res.data.results);
                console.log(res.data);
                setIsLoading(false);
            })
            .catch((err) => { 
                if(err instanceof CanceledError) return;
                setError(err.message);
                setIsLoading(false);
            });

        return () => cancel();
    }, []);

    return {games, error, isLoading, setGames, setError};
}

export default useGames