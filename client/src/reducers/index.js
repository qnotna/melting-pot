// We’ll use combinedReducers from redux to combine our authReducer and errorReducer into one rootReducer.

import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});