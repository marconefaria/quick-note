import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Menu from "./pages/Menu";

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/temp" component={Menu} />
            </Switch>
        </BrowserRouter> 
    );
}

export default Routes;