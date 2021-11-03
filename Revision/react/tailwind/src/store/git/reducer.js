import { GIT_LOAD, GIT_SUCCESS, GIT_FAIL } from "./actionTypes";

const init = {
  users: [],
  loading: false,
  error: false,
};

const gitReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GIT_LOAD:
      return { ...state, loading: true };
    case GIT_SUCCESS:
      return { ...state, loading: false, users: payload };
    case GIT_FAIL:
      return { ...state, users: [], loading: false, error: true };
    default:
      return state;
  }
};

export default gitReducer;
