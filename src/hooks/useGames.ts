import  { useEffect, useState } from 'react'
import gameService, {Game }  from '../services/game-service';
import { FetchGamesResponse } from '../services/http-service';
import { CanceledError } from 'axios';


const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        
        const {request, cancel} = gameService.getAll<FetchGamesResponse>();
        request
            .then((res) => {  
                setGames(res.data.results);
                console.log(res.data);
            })
            .catch((err) => { 
                if(err instanceof CanceledError) return;
                setError(err.message);
            });

        return () => cancel();
    }, []);

    return {games, error, setGames, setError};
}

export default useGames