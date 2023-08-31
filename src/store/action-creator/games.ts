import { Dispatch } from "redux"
import { GamesAction, GamesActionTypes, IGame  } from "../../types/games"
import { fetchGamesByAllParameters, fetchGamesWithoutCategory, getOneGame } from "../../services/games"
import { getGameFromCache } from "../../utils/checkGameFromCache"
import { convertFilterOption } from "../../utils/convertFilterOptions"

export const fetchGames = (platform: string, genre: string, sorting: string) => {
  return async (dispatch: Dispatch<GamesAction>) => {
      try {
          dispatch({ type: GamesActionTypes.FETCH_GAMES });

          const games = genre === 'all' ? await fetchGamesWithoutCategory(platform, sorting) : await fetchGamesByAllParameters(platform, genre, sorting)

          dispatch({ type: GamesActionTypes.FETCH_GAMES_SUCCESS, payload: games });
      } catch (error) {
          dispatch({
              type: GamesActionTypes.FETCH_GAMES_ERROR,
              payload: `Oops! Can't load the data. ${error}`
          });
      }
  }
}

export const fetchOneGame = (gameId: number) => {
  return async (dispatch: Dispatch<GamesAction>) => {
    try {
      dispatch({ type: GamesActionTypes.FETCH_ONE_GAME });
      const game: IGame = await getOneGame(gameId); 

      const currentTime = new Date().getTime();
      const cachedGame = {
        data: game,
        timestamp: currentTime,
      };
      localStorage.setItem(`game_${gameId}`, JSON.stringify(cachedGame));

      dispatch({
        type: GamesActionTypes.FETCH_ONE_GAME_SUCCESS,
        payload: game,
      });
    } catch (error) {
      dispatch({
        type: GamesActionTypes.FETCH_ONE_GAME_ERROR,
        payload: `Oops! Can't load the data. ${error}`,
      });
    }
  };
};


export const fetchGameFromCache = (gameId: number) => {

  return (dispatch:Dispatch<GamesAction>) =>  {
    dispatch({ type: GamesActionTypes.FETCH_ONE_GAME })

    const data = getGameFromCache(gameId)

    dispatch({type: GamesActionTypes.FETCH_ONE_GAME_SUCCESS, payload: data})
  }
}

export const changeGenre = (genre:string) => {
  return async (dispatch: Dispatch<GamesAction>) => {
    dispatch({type: GamesActionTypes.CHANGE_GENRE, payload: convertFilterOption(genre)})
  }
}

export const changePlatform = (platform: string) => {
  return async (dispatch: Dispatch<GamesAction>) => {
    dispatch({type: GamesActionTypes.CHANGE_PLATFORM, payload: convertFilterOption(platform)})
  }
}

export const changeSorting = (filter: string) => {
  return async (dispatch: Dispatch<GamesAction>) => {
    dispatch({type: GamesActionTypes.CHANGE_SORTING, payload: convertFilterOption(filter)})
  }
}