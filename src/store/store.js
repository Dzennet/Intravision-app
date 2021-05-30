import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import requestsListReducer from "./reducers/requestsListReducer";

const reducers = combineReducers({
  requestsList: requestsListReducer,
});

// const persistedState = localStorage.getItem("reduxState")
//   ? JSON.parse(localStorage.getItem("reduxState"))
//   : {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  // persistedState,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

// store.subscribe(() => {
//   localStorage.setItem("reduxState", JSON.stringify(store.getState()));
// });

window.store = store;
export default store;
