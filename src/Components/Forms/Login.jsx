import Logo from "../../Images/Logo.png";
import "../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import axios from 'axios'

// React-Bootstrap
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

const Login = () => {
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        axios
          .post(process.env.HEROKU_URI + "/users/login", {
            email: e.target.formEmail.value,
            password: e.target.formPassword.value
          })
          .then(response => {
            console.log("successful Login: ", response);
            localStorage.setItem("JWT", response.data.token);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("user_id", response.data.user._id);
            alert("Sucessful Login")
            navigate("/")
          })
          .catch(error => {
            console.log("Error in Login: ", error);
            if (error.response)
              alert(error.response.data.message);
          });
      }

    return (
        <Container fluid className="login-container">
            <Alert variant="secondary">
                Email: test@test.com
                <br />
                PW: @R2345678
            </Alert>

            <Image className="login-logo" src={Logo} fluid />

            <LoginForm onSubmit={handleLogin}/>

            <p className="sign-up">
                Sign up for 1 month free trial!{" "}
                <Link to="/signup" className="signup-link">
                Sign Up
                </Link>
            </p>
        </Container>
     );
}
 
export default Login;