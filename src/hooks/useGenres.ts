import  { useEffect, useState } from 'react'
import { CanceledError } from 'axios';
import genreService, { FetchGenresResponse, Genre } from '../services/genre-service';


const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
        
        const {request, cancel} = genreService.getAll<FetchGenresResponse>();
        setIsLoading(true);
        request
            .then((res) => {  
                setGenres(res.data.results);
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

    return {genres, error, isLoading, setGenres, setError};
}

export default useGenres