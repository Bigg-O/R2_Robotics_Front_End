import { Component } from "react";
import "../css/Home.css"

import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button"

class Home extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return (
            <Container fluid className="home-container">
                <Form>
                    <Row>
                        <h1 className="home-desc">Add an image or file!</h1>
                        <Col>
                            <FloatingLabel controlId="floatingInput" className="md-3" label="Product ID" >
                                <Form.Control type="id" placeholder="."/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" className="md-3" label="Product Name" >
                                <Form.Control type="id" placeholder="."/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" className="md-3" label="Reference Number" >
                                <Form.Control type="id" placeholder="."/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingSelect" label="country">
                                <Form.Select aria-label="country">
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Product Info">
                                <Form.Control
                                    as="textarea"
                                    placeholder=""
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Col>
                        <Col>
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label>Image upload</Form.Label>
                                <Form.Control type="file" size="lg" />
                            </Form.Group>
                            <Form.Group controlId="formFileLg" className="mb-3">
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
            </Container>
        );
    }
}
 
export default Home;