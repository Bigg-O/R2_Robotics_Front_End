import React, { Component } from 'react'
import "../css/Signup.css";
import Logo from "../../Images/Logo.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import axios from "axios";
// import history from "../../history";
// const HEROKU_URL = "https://dareme-server.herokuapp.com/";

class Signup extends Component {
    render() { 
        return (
            <Container fluid className="signup-container">
                <Image className="logo" src={Logo} fluid />

                <h1 className="signup-desc">Create an Account!</h1>

                <SignupForm onSubmit={this.handleSubmission} />

                <p className="b2-login">
                    NVM I already have an account, back to{" "}
                    <Link className="login-link" to="/login">
                    Log In
                    </Link>
                </p>
            </Container>
        );
    }
}
 
export default Signup;