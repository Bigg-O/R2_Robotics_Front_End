import React, { Component } from 'react'

import Logo from "../../Images/Logo.png";
import "../css/Login.css";
import { Link, Route } from "react-router-dom";
import LoginForm from "./LoginForm";

// React-Bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

class Login extends Component {
    render() { 
        return (
            <Container fluid className="login-container">
                <Alert variant="secondary">
                    Email: test@test.com
                    <br />
                    PW: @R2345678
                </Alert>

                <Image className="login-logo" src={Logo} fluid />

                <LoginForm onSubmit={this.props.onUserDataLoad}/>

                <p className="sign-up">
                    Sign up for 1 month free trial!{" "}
                    <Link to="/signup" className="signup-link">
                    Sign Up
                    </Link>
                </p>
            </Container>
        );
    }
}
 
export default Login;