import { combineReducers } from "redux";
import dateReducer from "./date";

const allReducers = combineReducers({
  date: dateReducer,
});

export default allReducers;
