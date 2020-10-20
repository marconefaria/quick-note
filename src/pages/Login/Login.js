import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import {useHistory} from "react-router-dom";
import "./Login.css";

function Login(){
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const history = useHistory();

    function login(){
        alert("Bem vindo, "+ email +"!");
        history.push("home");
    }

    return (
        <div className="base">
            <div className="container">
                <div>
                    <p>Quick note</p>
                    <Form className="inputs">
                        <Form.Group controlId="email">
                            <Form.Control 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="senha">
                            <Form.Control 
                            type="password" 
                            placeholder="Senha" 
                            onChange={(e) => setSenha(e.target.value)}/>
                        </Form.Group>
                        <Button variant="primary" onClick = {login}>Login</Button>
                    </Form>
                    <style>@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');</style>
                    
                </div>
            </div>
        </div>
    );
}

export default Login;