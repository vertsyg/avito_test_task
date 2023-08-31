import axios from "axios";
import { IGame } from "../types/games";

export const fetchGamesByAllParameters = async (platform: string, genre: string, sorting: string):Promise<IGame[]> => {
  
  const URL = `https://www.freetogame.com/api/games?platform=${platform}&category=${genre}&sort-by=${sorting}&callback=myCallback`

  const response = await axios.get(URL)

  return response.data
}

export const fetchGamesWithoutCategory = async (platform: string, sorting: string): Promise<IGame[]> => {
  const URL = `https://www.freetogame.com/api/games?platform=${platform}&sort-by=${sorting}`
  
    const response = await axios.get(URL)
    
    return response.data
}


export const getOneGame = async (gameId: number): Promise<IGame> => {
  const URL = `https://www.freetogame.com/api/game?id=${gameId}`

  const result = await  axios.get(URL)

  return result.data
}