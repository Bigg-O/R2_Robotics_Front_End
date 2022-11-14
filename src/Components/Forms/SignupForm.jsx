import React, { Component } from "react";
import { Form, Row, Col, Button, InputGroup, Alert } from "react-bootstrap";
import "../css/SignupForm.css";

export class SignupForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Row>
          <Form.Group as={Col} md="6" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
              />
              <Form.Control.Feedback type="invalid">
                Please choose an email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="password-row">
          <Form.Group as={Col} md="6" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="formPassword2">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Password Confirmation"
            />
          </Form.Group>
        </Row>

        <Alert variant="dark">
          Password must be a minimum length of 8 characters including a Capital Letter, at least one of (*, @, %, $) and a number.
        </Alert>

        <Button className="create-button" type="submit" variant="dark">
          Create an Account!
        </Button>
      </Form>
    );
  }
}

export default SignupForm;