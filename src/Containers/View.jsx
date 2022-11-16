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
    }

    componentDidMount() {
        axios
            .get(HEROKU_URI + `/files/${localStorage.getItem("user_id")}`, {
            // .get(`http://localhost:3001/files/${localStorage.getItem("user_id")}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`
                }
            }).then(resp => {
                console.log(resp)
                this.setState({files : resp.data.files})
            }).catch(err => {
                console.log(err)
            })
    }

    handleDelete = id => {
        axios
            .delete(HEROKU_URI + "/files/" + id, {
            // .delete("http://localhost:3001/files/" + id, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("JWT")}`
                }
            }).then(resp => {
                console.log(resp)
                this.updateStateDelete(id)
            }).catch(err => {
                console.log(err)
            })
    }

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
                            <th>Date Created</th>
                            <th>Product Name</th>
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