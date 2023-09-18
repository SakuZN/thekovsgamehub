import useData from "./useData.ts";
import {Query} from "../App.tsx";

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
const UseGames = (query : Query) =>
    useData<Game>
    (
        '/games',
        {params: {genres: query.genre?.id, platforms: query.platform?.id}},
        [query])
export default UseGames
