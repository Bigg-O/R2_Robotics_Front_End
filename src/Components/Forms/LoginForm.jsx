import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class LoginForm extends Component {
  render() {
    return (
      <Form className="loginForm" onSubmit={this.props.onSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control required type="password" placeholder="Enter Password" />
        </Form.Group>

        <Button className="log-in" variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    );
  }
}

export default LoginForm;
