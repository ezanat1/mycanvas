import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, UPDATE_USER,ADD_COURSE } from "./types";
import setAuthToken from "../setAuthToken";
import jwt_decode from "jwt-decode";

import checkEmpty from '../validation/checkEmpty';

export const addCourse = (course, history) => dispatch => {
  axios
    .post("course/addCourse", course)
    .then(res => history.push("/facultyDashboard"))
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
