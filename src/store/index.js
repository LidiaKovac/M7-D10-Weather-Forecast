import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import queryReducer from "../reducer/query";
import coordsReducer from '../reducer/coords'
import weatherReducer from '../reducer/weather'
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  city: { city: "milano" },
  coords: {
    data: {
      lat: "0",
      lon: "0",
    },
  },
  weather: {
    data: {}
  }
};

const bigReducer = combineReducers({
  city: queryReducer,
  coords: coordsReducer,
  weather: weatherReducer
}); //associates reducers to state values

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  ); //creates store with thunk middleware
}
