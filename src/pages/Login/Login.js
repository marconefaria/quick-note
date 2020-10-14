import React from "react";
import { Link } from "react-router-dom";

function Login(){
    return (
        <div>
            <h1>Login</h1>
            <Link to="home">Home</Link>
            <Link to="cadastro">Cadastro</Link>
        </div>
    );
}

export default Login;