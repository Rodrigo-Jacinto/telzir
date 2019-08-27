import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from "./pages/home/Home.js";
import Help from "./pages/help/Help.js";
import Spending from "./pages/spending/Spending.js";

const Routes = () => (

    <BrowserRouter>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/help" component={Help} />
            <Route path="/spending" component={Spending} />
        </Switch>

    </BrowserRouter>

);

export default Routes;