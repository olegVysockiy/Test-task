import { createStore, applyMiddleware } from "redux";
import initState from "./initState";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware()))

export default store
