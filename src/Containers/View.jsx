import { Component } from "react"
import "./css/View.css"
import ViewCard from "../Components/ViewCard"
import axios from "axios"

import Container from "react-bootstrap/Container"
import Table from "react-bootstrap/Table"

class View extends Component {
    constructor(props) {
        super(props)
        this.state = {
            files: []
        }
    }

    componentDidMount() {
        axios
            .get(process.env.HEROKU_URI + `/files/${localStorage.getItem("user_id")}`, {
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

    render() { 
        console.log(this.state.files)
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
                            />
                        ))}
                    </tbody>
                </Table>
            </Container>
        );
    }
}
 
export default View;