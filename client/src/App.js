import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (

    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <Route path="/" exact component={HomePage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </div>
        </div>
    </div>
);



export default App;
