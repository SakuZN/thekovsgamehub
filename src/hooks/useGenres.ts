import useData from "./useData.ts";

interface Genre {
    id: number;
    name: string;
}
const UseGenres = () => useData<Genre>('/genres')

export default UseGenres
