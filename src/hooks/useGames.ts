import useData from "./useData.ts";
import {Genre} from "./useGenres.ts";
import {Platforms} from "./usePlatforms.ts";

export interface GamePlatform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: GamePlatform}[];
    metacritic: number;
}
const UseGames = (selectedGenre: Genre | null, selectedPlatform: Platforms | null) =>
    useData<Game>
    (
        '/games',
        {params: {genres: selectedGenre?.id, platforms: selectedPlatform?.id}},
        [selectedGenre?.id, selectedPlatform?.id])
export default UseGames
