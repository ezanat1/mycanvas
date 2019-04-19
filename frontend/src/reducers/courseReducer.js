import { ADD_COURSE } from "../actions/types";
import checkEmpty from "../validation/checkEmpty";

const initialState = {
  isAuthenticated: false,
  course: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_COURSE:
      return {
        ...state,
        isAuthenticated: !checkEmpty(action.payload),
        course: action.payload
      };
    default:
      return state;
  }
}
