import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import gamesReducer from "./reducers/gamesReducers";
import thunk from "redux-thunk";

export const store = createStore(
  gamesReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

export type RootState = ReturnType<typeof gamesReducer>