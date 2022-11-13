import React, { Component } from "react";
import { Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import "../css/SignupForm.css";

export class SignupForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <Row>
          <Form.Group as={Col} md="6" controlId="formUsername">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                required
                type="email"
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row>
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

        <Button className="create-button" type="submit" variant="dark">
          Create an Account!
        </Button>
      </Form>
    );
  }
}

export default SignupForm;