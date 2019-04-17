import { combineReducers } from "redux";
import errorReducer from "./errorReducers";
import authReducer from "./authReducer";
import courseReducer from "../reducers/courseReducer";

export default combineReducers({
  errors: errorReducer,
  auth: authReducer,
  course:courseReducer
});
