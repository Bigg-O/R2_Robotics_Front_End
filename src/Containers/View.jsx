import { Component } from "react"
import "./css/View.css"
import ViewCard from "../Components/ViewCard"
import axios from "axios"
import download from 'downloadjs';

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

const HEROKU_URI = "https://r2-robotics-backend.herokuapp.com"

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
        this.headers = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("JWT")}`
            }
        }
    }

    componentDidMount() {
        axios
            .get(HEROKU_URI + `/files/${localStorage.getItem("user_id")}`, this.headers
            // .get(`http://localhost:3001/files/${localStorage.getItem("user_id")}`, this.headers
            ).then(resp => {
                console.log(resp)
                this.setState({files : resp.data.files})
            }).catch(err => {
                console.log(err)
            })
    }

    handleDelete = id => {
        axios
            .delete(HEROKU_URI + "/files/" + id, this.headers
            // .delete("http://localhost:3001/files/" + id, {
            ).then(resp => {
                console.log(resp)
                this.updateStateDelete(id)
            }).catch(err => {
                console.log(err)
            })
    }

    handleEdit = (e, file) => {
        const {
            formProductName,
            formReferenceNumber,
            formCountry,
            formProductInfo
        } = e.target

        const updatedFile = {
            product_name : this.getDiff(file.productName, formProductName.value),
            reference_number : this.getDiff(file.referenceNumber, formReferenceNumber.value),
            country : this.getDiff(file.country, formCountry.value),
            product_info : this.getDiff(file.productInfo, formProductInfo.value)
        }

        let files = [...this.state.files]
        const fileIndex = files.indexOf(file)
        let tempFile = {...files[fileIndex]}
        tempFile.product_name = updatedFile.product_name
        tempFile.reference_number = updatedFile.reference_number
        tempFile.country = updatedFile.country
        tempFile.product_info = updatedFile.product_info
        files[fileIndex] = tempFile

        axios
            .patch(HEROKU_URI + "/files/" + file._id,
            // .patch("http://localhost:3001/files/" + file._id, 
                {
                    product_name : updatedFile.product_name,
                    reference_number : updatedFile.reference_number,
                    country : updatedFile.country,
                    product_info : updatedFile.product_info
                },
                this.headers
            ).then(resp => {
                console.log(resp)
                this.setState({ files })
            }).catch(err => {
                console.log(err)
            })
    }

    getDiff = (original, update) => { return update === "" ? original : update }

    updateStateDelete = id => {
        let files = [...this.state.files]
        const fileIndex = files.map(file => file._id).indexOf(id)
        files.splice(fileIndex, 1)
        this.setState({files})
    }

    handleDownload = (e, id) => {
        e.preventDefault()

        axios
            .get(HEROKU_URI + "/files/download/" + id, {
            // .get("http://localhost:3001/files/download/" + id, {
                responseType: 'blob'
            },
            ).then(resp => {
                console.log(resp)
                download(resp.data, null, resp.data.type)
            }).catch(err => {
                console.log(err)
            })
    }

    render() { 
        return (
            <Container fluid className="view-container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product Name</th>
                            <th>Date Created</th>
                            <th>Product Info</th>
                            <th>Reference #</th>
                            <th>Country</th>
                            <th>File</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.files.map(file => (
                            <ViewCard
                                key={file._id}
                                file={file}
                                onEdit={this.handleEdit}
                                onDelete={this.handleDelete}
                                onDownload={this.handleDownload}
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
 
export default View;