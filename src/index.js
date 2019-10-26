import React from "react";
import ReactDOM from "react-dom";
import { queryToObj } from "string-manager"

// redux
import reducers from "./redux/reducers/index";
import sagas from "./redux/sagas/index";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxLogger from "redux-logger";

// pages
import HomePage from "./pages/index";
import NewsDetail from "./pages/NewsDetail";

// redux configuration
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, ReduxLogger)
);

sagaMiddleware.run(sagas);

const App = () => {
  const query = queryToObj(window.location.search.replace("?", ""));
  // const query = {};
  return (
    <Provider store={store}>
      {/* simple conditional to get post list or post detail */}
      {query.id ? <NewsDetail /> : <HomePage />}
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
