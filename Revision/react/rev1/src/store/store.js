import reducer from "./reducer";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let composeEnhancer = compose;

let enhancer = composeEnhancer(applyMiddleware(thunk));

if (process.env.NODE_ENV !== "production") {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
}

const store = createStore(reducer, enhancer);

export { store };
