 import { useState , useEffect} from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";
 export interface Platform{
    platform: any;
    id:number;
    name : string;
    slug:string;
}
export interface Game{
    id:number;
name : string;
background_image:string;
parent_platforms:{platform:Platform}[];
metacritic:number;
}

const useGames=(gameQuery:GameQuery)=>
    useData<Game>('/games',{params:{
        genres:gameQuery.genre?.id,
         platforms: gameQuery.platform?.id ,
          ordering : gameQuery.SortOrder}},[gameQuery]);
export default useGames;