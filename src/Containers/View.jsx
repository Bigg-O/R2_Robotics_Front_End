import { Component } from "react"
import "./css/View.css"
import ViewCard from "../Components/ViewCard"
import axios from "axios"

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
            // .get(`http://localhost:3001/files/${localStorage.getItem("user_id")}`, {
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
            productName : this.getDiff(file.productName, formProductName.value),
            referenceNumber : this.getDiff(file.referenceNumber, formReferenceNumber.value),
            country : this.getDiff(file.country, formCountry.value),
            productInfo : this.getDiff(file.productInfo, formProductInfo.value)
        }

        let files = [...this.state.files]
        const fileIndex = files.indexOf(file)
        let tempFile = {...files[fileIndex]}
        tempFile.productName = updatedFile.productName
        tempFile.referenceNumber = updatedFile.referenceNumber
        tempFile.country = updatedFile.country
        tempFile.productInfo = updatedFile.productInfo
        files[fileIndex] = tempFile

        axios
            .patch(HEROKU_URI + "/files/" + file._id,
            // .patch("http://localhost:3001/files/" + file._id, 
                {
                    productName : updatedFile.productName,
                    referenceNumber : updatedFile.referenceNumber,
                    country : updatedFile.country,
                    productInfo : updatedFile.productInfo
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
                            <th>Image</th>
                            <th>File Name</th>
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
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
 
export default View;