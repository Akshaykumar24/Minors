import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import gitReducer from "./git/reducer";
import thunk from "redux-thunk";

const root = combineReducers({
  git: gitReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));

export default store;
