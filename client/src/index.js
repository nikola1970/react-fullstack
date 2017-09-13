import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { userLoggedIn } from "./actions/auth.actions";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

if (localStorage.reactJWT) {
    const user = { token: localStorage.reactJWT };
    store.dispatch(userLoggedIn(user));
}

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
