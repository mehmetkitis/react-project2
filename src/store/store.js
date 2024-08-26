import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { globalReducer } from "./reducers/globalReducer";
import { favoritesreducer } from "./reducers/favoritesReducer";
import { movieReducer } from "./reducers/movieReducer";
import wCalculatorReducer from "./reducers/wCalculatorReducer";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { favFilmsReducer } from "./reducers/favFilmsReducer";

export const reducers = combineReducers({
    globalReducer: globalReducer,
    favoritesReducer: favoritesreducer,
    movieReducer: movieReducer,
    wCalculatorReducer: wCalculatorReducer,
    favFilmsReducer: favFilmsReducer,
})

export const store = createStore(reducers, applyMiddleware(thunk, logger));