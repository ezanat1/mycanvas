import { UPDATE_USER } from "../actions/types";
import checkEmpty from "../validation/checkEmpty";
const initialState = {};
export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        isAuthenticated: !checkEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}
