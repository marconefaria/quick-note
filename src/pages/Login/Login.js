import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { Form, Button } from "react-bootstrap";

function Login(){
    return (
        <div className="base">
            <div className="container">
                <div>
                    <p>Quick note</p>
                    <Form className="inputs">
                        <Form.Group controlId="email">
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                        </Form.Group>
                        <Form.Group controlId="senha">
                            <Form.Control type="password" placeholder="Senha" />
                        </Form.Group>
                        <Button variant="primary">Login</Button>
                    </Form>
                    <style>@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&display=swap');</style>
                </div>
            </div>
        </div>
    );
}

export default Login;