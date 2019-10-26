import { combineReducers } from "redux";
import newsReducer from "./news";

export default combineReducers({
  News: newsReducer
});
