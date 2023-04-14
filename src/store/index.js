import { legacy_createStore as createStore, applyMiddleware } from "redux";

import todoReducer from "../reducers/todoReducer";

const store = createStore(todoReducer);

export default store

