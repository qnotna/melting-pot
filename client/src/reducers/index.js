import { combineReducers } from "redux";
import settingsReducer from "./settingsReducer";
import errorReducer from "./errorReducer";
import newsReducer from "./newsReducer";

export default combineReducers({
  settings: settingsReducer,
  errors: errorReducer,
  news: newsReducer
});


