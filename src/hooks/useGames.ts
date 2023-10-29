import  { useEffect, useState } from 'react'
import gameService, {Game}  from '../services/game-service';

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const request = gameService.getAll<Game>();
        request
            .then((res) => {
                //@ts-ignore
                setGames(res.data.results);
                console.log(res.data);
            })
            .catch((err) => { 
                setError(err.message);
            });

    }, []);

    return {games, error, setGames, setError};
}

export default useGames