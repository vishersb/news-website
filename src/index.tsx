import React from "react";
import ReactDOM from "react-dom";
import { App } from "./modules/App";
import { createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from "./redux/rootReducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from "./redux/sagas";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const saga = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, saga)));
saga.run(sagaWatcher)
const app = (
  <Provider store={store}>
    <App/>
  </Provider>
)
ReactDOM.render(
  app,
  document.getElementById("root")
);