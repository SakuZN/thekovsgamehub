import GenreData from "../data/GenreData.ts";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}
const UseGenres = () => ({data: GenreData, isLoading: false, error: null})
// useData<Genre>('/genres')
export default UseGenres
