import useData from './useData';

export interface Genre{
    id: number;
    image_background: string;
    name: string;
    slug: string
}
const useGenres = () => useData<Genre>('/genres')

export default useGenres