import {
    LOGIN_FETCHING,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
} from "../constants";
const initialState = {
    result: null,
    isFetching: false,
    isError: false,
    errMessage: null
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
      case LOGIN_FETCHING:
        return { ...state, result: null, isFetching: true, isError: false,errMessage:null };
      case LOGIN_SUCCESS:
        return { ...state, result: payload, isFetching: false, isError: false,errMessage:null };
      case LOGIN_FAILED:
        return { ...state, result: null, isFetching: false, isError: true,errMessage:payload };
      default:
        return state;
    }
  };
