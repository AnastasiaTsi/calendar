import { combineReducers } from "redux";
import dateReducer from "./date";
import listReducer from "./list";

const allReducers = combineReducers({
  date: dateReducer,
  list: listReducer,
});

export default allReducers;
