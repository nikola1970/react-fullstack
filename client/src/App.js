import React from 'react';
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/DashboardPage";
import AuthorisedRoute from "./components/routes/AuthorisedRoute";
import GuestRoute from "./components/routes/GuestRoute";

const App = ({ location }) => (

    <div className="container">
        <div className="row">
            <div className="col-xs-12">
                <Route location={location} path="/" exact component={HomePage} />
                <AuthorisedRoute location={location} path="/dashboard" component={DashboardPage} />
                <GuestRoute location={location} path="/register" component={RegisterPage} />
                <GuestRoute location={location} path="/login" component={LoginPage} />
            </div>
        </div>
    </div>
);



export default App;
