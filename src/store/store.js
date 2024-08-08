import { legacy_createStore as createStore } from "redux";
import { globalReducer } from "./globalReducer";



export const store = createStore(globalReducer);