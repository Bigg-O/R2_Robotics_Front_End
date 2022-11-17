import React, { Component } from "react";
import "../css/HomeForm.css"
import Countries from "../../JSON/countries.json"

import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button"

class HomeForm extends Component {
    render() { 
        return ( 
            <Form onSubmit={this.props.onSubmit}>
                <Row>
                    <h1 className="home-desc">Add an image or file!</h1>
                    <Col>
                        <FloatingLabel controlId="formProductName" className="md-3" label="Product Name" >
                            <Form.Control type="id" placeholder="."/>
                        </FloatingLabel>
                        <FloatingLabel controlId="formReferenceNumber" className="md-3" label="Reference Number" >
                            <Form.Control type="id" placeholder="."/>
                        </FloatingLabel>
                        <FloatingLabel controlId="formCountry" label="country">
                            <Form.Select aria-label="country">
                                {Countries.countries.map(country => (
                                    <option key={country} value={country}>{country}</option>
                                ))}
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel controlId="formProductInfo" label="Product Info">
                            <Form.Control
                                as="textarea"
                                placeholder=""
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                    </Col>
                    <Col>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>File upload</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="button-row">
                    <Button variant="dark" size="lg" type="submit">
                        Upload
                    </Button>
                </Row>
            </Form> 
        );
    }
}
 
export default HomeForm;