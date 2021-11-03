import { GIT_LOAD, GIT_SUCCESS, GIT_FAIL } from "./actionTypes";

const gitLoad = () => {
  return { type: GIT_LOAD };
};

const gitSuccess = (payload) => {
  return { type: GIT_SUCCESS, payload };
};

const gitFail = (payload) => {
  return { type: GIT_FAIL, payload };
};

const search = (q) => async (dispatch) => {
  console.log("called");
  dispatch(gitLoad);
  let pl = await fetch(`https://api.github.com/search/users?q=${q}`)
    .then((res) => res.json())
    .catch(dispatch(gitFail()));
  dispatch(gitSuccess(pl.items));
};

export { gitLoad, gitSuccess, gitFail, search };
