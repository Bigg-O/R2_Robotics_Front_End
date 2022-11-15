import { useNavigate } from 'react-router-dom'
import "../css/Signup.css";
import Logo from "../../Images/Logo.png";
import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import axios from "axios";

// to be changesd
const HEROKU_URI = "https://r2-proj.netlify.app"

const Signup = () => {
    const navigate = useNavigate()
    
    const handleSubmission = e => {
        e.preventDefault();
        const { value } = e.target.formPassword

        if (validatePW(value, e.target.formPassword2.value)) {
            axios
                .post(HEROKU_URI + "/users/signup", {
                    email: e.target.formEmail.value,
                    password: value
                })
                .then(response => {
                    console.log(response);
                    alert(response.data.message)
                    navigate("/login")
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 500) {
                        alert("Invalid email format")
                    } else {
                        alert(err);
                    }
                });
        } else {
          alert("Password match or validation Failed");
        }
    };

    const validatePW = (str, str2) => {
        const specialKeys = ["*","@","%","$"]
        const numbers = ['0','1','2','3','4','5','6','7','8','9']

        if (str.length < 8) {
            return false
        } else if (str === str.toLowerCase()) {
            return false
        } else if (str !== str2) {
            return false
        }

        for (let i = 0; i < specialKeys.length; i++) {
            if (str.includes(specialKeys[i])) {
                break
            }
            if (i === specialKeys.length - 1) {
                return false
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            if (str.includes(numbers[i])) {
                break
            }
            if (i === numbers.length - 1) {
                return false
            }
        }
  
        return true
    }

    return (
        <Container fluid className="signup-container">
            <Image className="logo" src={Logo} fluid />

            <h1 className="signup-desc">Create an Account!</h1>

            <SignupForm onSubmit={handleSubmission} />

            <p className="b2-login">
                NVM I already have an account, back to{" "}
                <Link className="login-link" to="/login">
                Log In
                </Link>
            </p>
        </Container>
    )
}
 
export default Signup;