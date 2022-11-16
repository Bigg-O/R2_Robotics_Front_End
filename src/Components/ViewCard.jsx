import { Component } from 'react'
import "./css/ViewCard.css"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class ViewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show : false
        }
    }

    handleModalShow = () => {this.setState({show: true})}
    handleModalClose = () => {this.setState({show: false})}
    handleFileDelete = () => {
        this.handleModalClose()
        this.props.onDelete(this.props.file._id)
    }

    render() { 
        return ( 
            <>
                <tr>
                    <td>{this.props.file._id}</td>
                    <td>{this.props.file.dateCreated}</td>
                    <td>{this.props.file.productName}</td>
                    <td>{this.props.file.productInfo}</td>
                    <td>{this.props.file.referenceNumber}</td>
                    <td>{this.props.file.country}</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>
                        <Button variant="link" className="edit">Edit</Button>
                        <Button
                            variant="link"
                            className="delete"
                            onClick={this.handleModalShow}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>

                <Modal
                    show={this.state.show}
                    onHide={this.handleModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Are You Sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are about to permenentley delete this data.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleModalClose}>
                            No
                        </Button>
                        <Button
                            variant="danger"
                            onClick={this.handleFileDelete}
                        >
                            DELETE
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}
 
export default ViewCard;