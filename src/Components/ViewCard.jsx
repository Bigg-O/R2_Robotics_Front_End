import { Component } from 'react'
import "./css/ViewCard.css"
import EditForm from "../Components/Forms/EditForm"

import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"

class ViewCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleteModalShow : false,
            editModalShow : false
        }
    }

    handleEditModalShow = () => {this.setState({editModalShow: true})}
    handleEditModalClose = () => {this.setState({editModalShow: false})}
    handleFileEdit = e => {
        e.preventDefault()
        this.handleEditModalClose()
        this.props.onEdit(e, this.props.file)
    }

    handleDeleteModalShow = () => {this.setState({deleteModalShow: true})}
    handleDeleteModalClose = () => {this.setState({deleteModalShow: false})}
    handleFileDelete = () => {
        this.handleDeleteModalClose()
        this.props.onDelete(this.props.file._id)
    }

    render() { 
        return (
            <>
                <tr>
                    <td>{this.props.file._id}</td>
                    <td>{this.props.file.productName}</td>
                    <td>{this.props.file.dateCreated}</td>
                    <td>{this.props.file.productInfo}</td>
                    <td>{this.props.file.referenceNumber}</td>
                    <td>{this.props.file.country}</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>
                        <Button
                            variant="link"
                            className="edit"
                            onClick={this.handleEditModalShow}
                        >
                            Edit
                        </Button>
                        <Button
                            variant="link"
                            className="delete"
                            onClick={this.handleDeleteModalShow}
                        >
                            Delete
                        </Button>
                    </td>
                </tr>

                <Modal
                    size="lg"
                    show={this.state.editModalShow}
                    onHide={this.handleEditModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header>
                        <Modal.Title>Editing {this.props.file._id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <EditForm
                            file={this.props.file}
                            onSubmit={this.handleFileEdit}
                        />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleEditModalClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal
                    show={this.state.deleteModalShow}
                    onHide={this.handleModalClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header>
                        <Modal.Title>Are You Sure?</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        You are about to permenentley delete this data.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleDeleteModalClose}>
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