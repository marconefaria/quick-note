import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route path="/" component={userMenu} />
                <Route exact path="/cadastro" component={Cadastro} />
            </Switch>
        </BrowserRouter> 
    );
}

function userMenu(){
    return (
        <Menu>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/home" component={() => <Redirect to="/login"/>} />
            </Switch>
        </Menu>
    );
}

export default Routes;