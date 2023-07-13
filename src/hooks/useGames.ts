
import useData from "./useData";
 
import { GameQuery } from "../App";
export interface Platform {
    platform: any;
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top:number;
    rating:number;
}

const useGames = (gameQuery: GameQuery) =>
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.SortOrder,
            serach: gameQuery.SearchText,
        }

    }, [gameQuery]);

export default useGames;