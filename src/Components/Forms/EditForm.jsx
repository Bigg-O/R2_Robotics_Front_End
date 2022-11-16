import { Component } from "react"
import "../css/EditForm.css"
import Countries from "../../JSON/countries.json"

import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

class EditForm extends Component {
    handleErrorMessage = () => {
        // function just to avoid default warning message
    }

    render() { 
        const { file } = this.props
        return ( 
            <Form onSubmit={this.props.onSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="formProductName" className="md-3" label="Product Name" >
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="id" value={file.productName} onChange={this.handleErrorMessage}/>
                        </Form.Group>
                        <Form.Group controlId="formReferenceNumber" className="md-3" label="Reference Number" >
                            <Form.Label>Reference Number</Form.Label>
                            <Form.Control type="id" value={file.referenceNumber} onChange={this.handleErrorMessage}/>
                        </Form.Group>
                        <Form.Group controlId="formCountry" label="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Select aria-label="country" defaultValue={file.country}>
                                {Countries.countries.map(country => (
                                    <option key={country} value={country}> {country} </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group controlId="formProductInfo" label="Product Info">
                            <Form.Label>Product Info</Form.Label>
                            <Form.Control
                                as="textarea"
                                value={file.productInfo}
                                style={{ height: '100px' }}
                                onChange={this.handleErrorMessage}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formImage" className="mb-3">
                            <Form.Label>Image upload</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>File upload</Form.Label>
                            <Form.Control type="file" size="lg" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="button-row">
                    <Button variant="primary" size="lg" type="submit">
                        Edit
                    </Button>
                </Row>
            </Form> 
        );
    }
}
 
export default EditForm;