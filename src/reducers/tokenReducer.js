import { GET_TOKEN } from "../constants";
const initialState = {
  token: null
};
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_TOKEN:
      return { ...state, token: payload };
    default:
      return state;
  }
};
