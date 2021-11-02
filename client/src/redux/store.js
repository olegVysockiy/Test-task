import { createStore, applyMiddleware } from "redux";
import initStateUser from "./initState";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initStateUser, composeWithDevTools(applyMiddleware()))

export default store
