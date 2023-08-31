import { GamesAction, GamesState, GamesActionTypes } from "../../types/games";

const initialState: GamesState= {
  games: [],
  game: null,
  loading: false,
  error: null,
  platform: 'all',
  genre: 'all',
  sorting: "relevance"
};
  
const gamesReducer = (state = initialState, action: GamesAction): GamesState => {
  switch (action.type) {
    case GamesActionTypes.FETCH_GAMES:
      return {...state, loading: true, error: null, games: []}
    case GamesActionTypes.FETCH_GAMES_SUCCESS:
      return {...state, loading: false, error: null, games: action.payload}
    case GamesActionTypes.FETCH_GAMES_ERROR:
      return {...state, loading: false, error: action.payload, games: []}
    case GamesActionTypes.FETCH_ONE_GAME:
      return {...state, loading: true, error: null}
    case GamesActionTypes.FETCH_ONE_GAME_SUCCESS:
      return {...state, loading: false, error: null, game: action.payload}
    case GamesActionTypes.FETCH_ONE_GAME_ERROR:
      return {...state, loading: false, error: action.payload}
    case GamesActionTypes.USE_FILTER:
      return {...state, loading: true}
    case GamesActionTypes.CHANGE_GENRE:
      return {...state, loading: false, genre: action.payload}
    case GamesActionTypes.CHANGE_PLATFORM:
      return {...state, loading: false, platform: action.payload}
    case GamesActionTypes.CHANGE_SORTING:
      return {...state, loading: false, sorting: action.payload}
    default:
      return state;
  }
};
  
export default gamesReducer;