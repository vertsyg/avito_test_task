interface IScreenshots {
  id: number;
  image: string
}

interface ISystemRequirements {
  os: string,
  processor: string,
  memory: string,
  graphics: string,
  storage: string, 
}

export interface IGame {
  id: number;
  title: string;
  release_date: string;
  publisher: string;
  genre: string;
  thumbnail: string;
  platform: string;
  developer: string;
  screenshots: IScreenshots[]
  minimum_system_requirements?: ISystemRequirements
}

export interface GamesState {
  games: IGame[];
  game: IGame | null;
  loading: boolean;
  error: null | string;
  platform: string,
  genre: string,
  sorting: string
}

export enum GamesActionTypes {
  FETCH_GAMES = "FETCH_GAMES",
  FETCH_GAMES_SUCCESS = "FETCH_GAMES_SUCCESS",
  FETCH_GAMES_ERROR = "FETCH_GAMES_ERROR",
  FETCH_ONE_GAME = "FETCH_ONE_GAME",
  FETCH_ONE_GAME_SUCCESS = "FETCH_ONE_GAME_SUCCESS",
  FETCH_ONE_GAME_ERROR = "FETCH_ONE_GAME_ERROR",
  USE_FILTER='CHANGE_FILTER',
  CHANGE_PLATFORM = 'CHANGE_PLATFORM',
  CHANGE_GENRE = 'CHANGE_GENRE',
  CHANGE_SORTING = 'CHANGE_SORTING'
}

export interface FetchGamesAction {
  type: GamesActionTypes.FETCH_GAMES;
}

export interface FetchGamesSuccessAction {
  type: GamesActionTypes.FETCH_GAMES_SUCCESS;
  payload: IGame[];
}

export interface FetchGamesErrorAction {
  type: GamesActionTypes.FETCH_GAMES_ERROR;
  payload: string;
}

export interface FetchOneGameAction {
  type: GamesActionTypes.FETCH_ONE_GAME;
}

export interface FetchOneGameSuccessAction {
  type: GamesActionTypes.FETCH_ONE_GAME_SUCCESS;
  payload: IGame;
}

export interface FetchOneGameErrorAction {
  type: GamesActionTypes.FETCH_ONE_GAME_ERROR;
  payload: string;
}

export interface useFilter {
  type: GamesActionTypes.USE_FILTER
}

export interface ChangePlatformAction {
  type: GamesActionTypes.CHANGE_PLATFORM;
  payload: string;
}

export interface ChangeGenreAction {
  type: GamesActionTypes.CHANGE_GENRE;
  payload: string;
}

export interface ChangeSortingAction {
  type: GamesActionTypes.CHANGE_SORTING;
  payload: string;
}

export type GamesAction = FetchGamesAction | FetchGamesSuccessAction | FetchGamesErrorAction | FetchOneGameAction | FetchOneGameSuccessAction | FetchOneGameErrorAction | ChangePlatformAction | ChangeGenreAction | ChangeSortingAction | useFilter