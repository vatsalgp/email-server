import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import App from './components/App';
import reducers from "./reducers";
import "materialize-css/dist/css/materialize.min.css";

let store;
if (process.env.NODE_ENV === "production" || !window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    store = createStore(reducers, applyMiddleware(reduxThunk));
} else {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));