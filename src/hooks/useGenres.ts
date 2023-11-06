import genres from '../data/genres'
export interface Genre{
    id: number;
    image_background: string;
    name: string;
    slug: string
}
const useGenres = () => ({data: genres, isLoading: false, error: null})

export default useGenres