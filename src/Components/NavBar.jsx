import { Component } from "react"
import { NavLink, Link } from "react-router-dom";
import "./css/NavBar.css";
import Logo from "../Images/Logo.png";

import Navbar from "react-bootstrap/Navbar"
import Button from "react-bootstrap/Button"
import Badge from "react-bootstrap/Badge"
import Nav from "react-bootstrap/Nav"
import Image from "react-bootstrap/Image"
import Container from "react-bootstrap/Container"

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        const username = "Tony Stark"
        // const username = localStorage.getItem("username");
        return (
            <Navbar collapseOnSelect expand="md" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="home-logo">
                        <Image src={Logo} fluid />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto"/>
                        <Nav>
                            <Nav.Link as={Link} to="/login" className="logout" onClick={this.handleLogout}>
                                <Button variant="link">logout</Button>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/view">
                                <Button className="view" variant="light">View</Button>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/pointcloud">
                                <Button className="pointcloud" variant="light">Point Cloud</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
 
export default NavBar;